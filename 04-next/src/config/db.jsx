import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "next",
});

// Test connection
async function checkDB() {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to database");
    connection.release();
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
}

checkDB();