const net = require('net');
const { promisify } = require('util');
const { exec } = require('child_process');
const execAsync = promisify(exec);

async function runNetworkDiagnostics() {
  const host = '172.40.0.50';
  const port = 3306;
  
  console.log('🔍 Running network diagnostics...\n');
  
  // Test 1: Basic connectivity with telnet-like test
  console.log('📡 Test 1: Port connectivity check');
  await testPortConnectivity(host, port);
  
  // Test 2: Ping test
  console.log('\n🏓 Test 2: Ping test');
  await testPing(host);
  
  // Test 3: DNS resolution
  console.log('\n🌐 Test 3: DNS resolution');
  await testDNSResolution(host);
  
  // Test 4: Traceroute
  console.log('\n🛣️  Test 4: Network route tracing');
  await testTraceroute(host);
}

async function testPortConnectivity(host, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 5000;
    
    socket.setTimeout(timeout);
    
    socket.on('connect', () => {
      console.log(`✅ Port ${port} is open and reachable`);
      socket.destroy();
      resolve();
    });
    
    socket.on('timeout', () => {
      console.log(`❌ Connection timeout after ${timeout}ms`);
      socket.destroy();
      resolve();
    });
    
    socket.on('error', (error) => {
      if (error.code === 'ECONNREFUSED') {
        console.log(`❌ Port ${port} is closed or filtered`);
      } else if (error.code === 'ENOTFOUND') {
        console.log(`❌ Host ${host} not found`);
      } else {
        console.log(`❌ Connection error: ${error.message}`);
      }
      resolve();
    });
    
    socket.connect(port, host);
  });
}

async function testPing(host) {
  try {
    const { stdout } = await execAsync(`ping -n 3 ${host}`);
    const lines = stdout.split('\n');
    const summary = lines.find(line => line.includes('Average'));
    if (summary) {
      console.log(`✅ Ping successful: ${summary.trim()}`);
    } else {
      console.log('✅ Ping completed (check full output for details)');
    }
  } catch (error) {
    console.log(`❌ Ping failed: ${error.message}`);
  }
}

async function testDNSResolution(host) {
  const dns = require('dns');
  const lookupAsync = promisify(dns.lookup);
  
  try {
    const result = await lookupAsync(host);
    console.log(`✅ DNS resolved: ${host} → ${result.address}`);
  } catch (error) {
    console.log(`❌ DNS resolution failed: ${error.message}`);
  }
}

async function testTraceroute(host) {
  try {
    const { stdout } = await execAsync(`tracert -h 10 ${host}`);
    const lines = stdout.split('\n').slice(0, 5); // Show first 5 hops
    console.log('✅ Traceroute started:');
    lines.forEach(line => {
      if (line.trim()) {
        console.log(`   ${line.trim()}`);
      }
    });
  } catch (error) {
    console.log(`❌ Traceroute failed: ${error.message}`);
  }
}

// Run diagnostics
runNetworkDiagnostics().then(() => {
  console.log('\n🏁 Network diagnostics completed');
}).catch((error) => {
  console.error('\n💥 Diagnostic error:', error);
});