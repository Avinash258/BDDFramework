<#
.SYNOPSIS
  Creates Azure DevOps work items for each automated test mapped to Sprint 1.

.DESCRIPTION
  Requires a Personal Access Token (PAT) with Work Items (Read & write).
  Set $Organization, $Project, $IterationPath, and $WorkItemType to match your process.

  InnoVisionDA / PlaywrightLearning:
  https://dev.azure.com/InnoVisionDA/PlaywrightLearning/

.EXAMPLE
  $env:AZDO_PAT = '***'
  .\scripts\create-azure-boards-sprint1-items.ps1

.EXAMPLE
  # Or put AZDO_PAT in repo-root .env.local (gitignored — see .env.example)
  .\scripts\create-azure-boards-sprint1-items.ps1
#>

[CmdletBinding()]
param(
  [string] $Organization = 'InnoVisionDA',
  [string] $Project = 'PlaywrightLearning',
  # IMPORTANT: Must match Azure DevOps exactly (Boards → Sprints → Sprint 1).
  [string] $IterationPath = 'PlaywrightLearning\Sprint 1',
  # Common values: Task, User Story, Product Backlog Item, Test Case (if enabled)
  [string] $WorkItemType = 'Task'
)

function Read-DotEnvLocal {
  param([string] $Path)
  if (-not (Test-Path -LiteralPath $Path)) { return $null }
  foreach ($line in Get-Content -LiteralPath $Path -ErrorAction Stop) {
    $t = $line.Trim()
    if (-not $t -or $t.StartsWith('#')) { continue }
    if ($t -match '^\s*AZDO_PAT\s*=\s*(.+)\s*$') {
      $v = $Matches[1].Trim()
      if (($v.StartsWith('"') -and $v.EndsWith('"')) -or ($v.StartsWith("'") -and $v.EndsWith("'"))) {
        $v = $v.Substring(1, $v.Length - 2)
      }
      return $v
    }
  }
  return $null
}

# $PSScriptRoot = .../scripts → repo root is one level up
$repoRoot = Split-Path -Parent $PSScriptRoot
if (-not $repoRoot) { $repoRoot = (Get-Location).Path }
$envFile = Join-Path $repoRoot '.env.local'

$pat = $env:AZDO_PAT
if (-not $pat) {
  $pat = Read-DotEnvLocal -Path $envFile
}
if (-not $pat) {
  Write-Error (
    "Azure DevOps PAT not found. Set `$env:AZDO_PAT or put AZDO_PAT=... in $envFile (see .env.example). " +
    'PAT scope: Work Items (Read & write).'
  )
  exit 1
}

$pair = ":$pat"
$bytes = [System.Text.Encoding]::ASCII.GetBytes($pair)
$base64 = [System.Convert]::ToBase64String($bytes)
$headers = @{
  Authorization = "Basic $base64"
  'Content-Type' = 'application/json-patch+json'
}

$baseUri = "https://dev.azure.com/$Organization/$Project/_apis/wit/workitems"

$items = @(
  @{ Title = '[Auto] Login - Successful login with standard user'; Tags = 'smoke; login; saucedemo'; Area = 'tests/features/login.feature' },
  @{ Title = '[Auto] Login - Login with locked out user'; Tags = 'smoke; login; saucedemo'; Area = 'tests/features/login.feature' },
  @{ Title = '[Auto] Login - Validation: Username is required'; Tags = 'smoke; login; saucedemo'; Area = 'tests/features/login.feature' },
  @{ Title = '[Auto] Login - Validation: Password is required'; Tags = 'smoke; login; saucedemo'; Area = 'tests/features/login.feature' },
  @{ Title = '[Auto] Login - Validation: Invalid username/password'; Tags = 'smoke; login; saucedemo'; Area = 'tests/features/login.feature' },
  @{ Title = '[Auto] Inventory - View inventory list'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Add multiple products to cart'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Remove product from cart on inventory page'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Sort: Name (A to Z)'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Sort: Name (Z to A)'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Sort: Price (low to high)'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Inventory - Sort: Price (high to low)'; Tags = 'regression; inventory; saucedemo'; Area = 'tests/features/inventory.feature' },
  @{ Title = '[Auto] Cart - View cart'; Tags = 'regression; cart; saucedemo'; Area = 'tests/features/cart.feature' },
  @{ Title = '[Auto] Cart - Remove item from cart'; Tags = 'regression; cart; saucedemo'; Area = 'tests/features/cart.feature' },
  @{ Title = '[Auto] Checkout - Successful checkout'; Tags = 'smoke; checkout; saucedemo'; Area = 'tests/features/checkout.feature' },
  @{ Title = '[Auto] Checkout - Checkout info validation'; Tags = 'smoke; checkout; saucedemo'; Area = 'tests/features/checkout.feature' },
  @{ Title = '[Auto] Menu - Logout from menu'; Tags = 'regression; menu; saucedemo'; Area = 'tests/features/menu.feature' },
  @{ Title = '[Auto] Menu - Reset app state'; Tags = 'regression; menu; saucedemo'; Area = 'tests/features/menu.feature' }
)

$created = 0
foreach ($item in $items) {
  $desc = '<div>Automated test coverage (Playwright-BDD).<br/>Source: <code>' + $item.Area + '</code><br/>Repo: BDDFramework</div>'
  $body = @(
    @{ op = 'add'; path = '/fields/System.Title'; value = $item.Title },
    @{ op = 'add'; path = '/fields/System.IterationPath'; value = $IterationPath },
    @{ op = 'add'; path = '/fields/System.Tags'; value = $item.Tags },
    @{ op = 'add'; path = '/fields/System.Description'; value = $desc }
  ) | ConvertTo-Json -Depth 10

  # Path must be .../workitems/$Task?api-version=7.0 (avoid `$$` in double quotes — can drop query string)
  $uri = $baseUri + '/$' + $WorkItemType + '?api-version=7.0'
  try {
    $response = Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body
    Write-Host "Created #$($response.id) - $($item.Title)"
    $created++
  } catch {
    Write-Warning "Failed: $($item.Title) - $($_.Exception.Message)"
    if ($_.ErrorDetails.Message) { Write-Host $_.ErrorDetails.Message }
  }
}

Write-Host "`nDone. Created $created / $($items.Count) work items."
