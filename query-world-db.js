const mysql = require('mysql2/promise');

async function queryWorldDB() {
  const connection = await mysql.createConnection({
    host: '172.40.0.50',
    port: 3306,
    user: 'test',
    password: 'Test@123',
    database: 'world',
    connectTimeout: 10000
  });

  try {
    console.log('=== CITY TABLE ===');
    const [citySchema] = await connection.execute('DESCRIBE city');
    console.log('Columns:', citySchema.map(c => `${c.Field}(${c.Type})`).join(', '));
    const [cities] = await connection.execute('SELECT * FROM city LIMIT 5');
    console.log('Sample rows:');
    cities.forEach(r => console.log(' ', JSON.stringify(r)));

    console.log('\n=== COUNTRY TABLE ===');
    const [countrySchema] = await connection.execute('DESCRIBE country');
    console.log('Columns:', countrySchema.map(c => `${c.Field}(${c.Type})`).join(', '));
    const [countries] = await connection.execute('SELECT * FROM country LIMIT 5');
    console.log('Sample rows:');
    countries.forEach(r => console.log(' ', JSON.stringify(r)));

    console.log('\n=== COUNTRYLANGUAGE TABLE ===');
    const [langSchema] = await connection.execute('DESCRIBE countrylanguage');
    console.log('Columns:', langSchema.map(c => `${c.Field}(${c.Type})`).join(', '));
    const [langs] = await connection.execute('SELECT * FROM countrylanguage LIMIT 5');
    console.log('Sample rows:');
    langs.forEach(r => console.log(' ', JSON.stringify(r)));

  } finally {
    await connection.end();
  }
}

queryWorldDB().catch(console.error);
