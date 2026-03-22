const mysql = require('mysql2/promise');

async function testMySQLConnection() {
  // Connection string: mysql://test:Test@123@172.40.0.50:3306/world
  const config = {
    host: '172.40.0.50',
    port: 3306,
    user: 'test',
    password: 'Test@123',
    database: 'world',
    connectTimeout: 10000
  };

  let connection;
  
  try {
    console.log('🔌 Attempting to connect to MySQL...');
    console.log(`📍 Host: ${config.host}:${config.port}`);
    console.log(`👤 User: ${config.user}`);
    console.log(`🏛️  Database: ${config.database}`);
    
    connection = await mysql.createConnection(config);
    
    console.log('✅ Connection established successfully!');
    
    // Test basic query
    const [rows] = await connection.execute('SELECT 1 as test');
    console.log('✅ Query test passed:', rows[0]);
    
    // Get server info
    const [version] = await connection.execute('SELECT VERSION() as version');
    console.log('📊 MySQL Version:', version[0].version);
    
    // Check current database
    const [currentDb] = await connection.execute('SELECT DATABASE() as current_db');
    console.log('🏛️  Current Database:', currentDb[0].current_db);
    
    // List tables in the world database
    const [tables] = await connection.execute('SHOW TABLES');
    console.log(`📋 Tables in '${config.database}' database:`, tables.length);
    tables.slice(0, 5).forEach((table, index) => {
      console.log(`   ${index + 1}. ${Object.values(table)[0]}`);
    });
    if (tables.length > 5) {
      console.log(`   ... and ${tables.length - 5} more tables`);
    }
    
    // Check connection status
    const [status] = await connection.execute('SHOW STATUS LIKE "Threads_connected"');
    console.log('🔗 Threads Connected:', status[0].Value);
    
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error('Error Code:', error.code);
    console.error('Error Message:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Suggestion: Check if MySQL server is running and port 3306 is open');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('💡 Suggestion: Verify username/password credentials');
    } else if (error.code === 'ENOTFOUND') {
      console.error('💡 Suggestion: Check if host address is correct and reachable');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('💡 Suggestion: Network timeout - check firewall and network connectivity');
    }
    
  } finally {
    if (connection) {
      try {
        await connection.end();
        console.log('🔚 Connection closed gracefully');
      } catch (closeError) {
        console.error('⚠️  Error closing connection:', closeError.message);
      }
    }
  }
}

// Run the test
console.log('🚀 Starting MySQL connection test...\n');
testMySQLConnection().then(() => {
  console.log('\n✨ Connection test completed');
}).catch((error) => {
  console.error('\n💥 Unexpected error:', error);
});