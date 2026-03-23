import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',   
    database: 'next'
});

try {
    const connection = await db.getConnection();
    console.log('Connected to the database!');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
   process.exit(1);
}