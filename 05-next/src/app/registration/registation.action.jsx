"use server";
import { db } from "../../config/db";
export const registerAction = async (FormData) => {
    const { name, email, password } = Object.fromEntries(FormData.entries());
    db.execute("insert into users (name, email, password) values (?,?,?)",
    [name, email, password]
    );
};
 