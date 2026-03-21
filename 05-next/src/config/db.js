import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "next",
});
try {
  const connection = await db.getConnection();
  console.log("Connected to MySQL database");
  connection.release();
}
 catch (err) {  console.error("Error connecting to MySQL database:", err);
    process.exit(1);
}
