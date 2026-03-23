"use server";

import { db } from "@/db";

export const contactAction = async (FormData) => {
    try {
        const { name, email, message } = Object.fromEntries(FormData.entries());
        await db.execute("insert into contracts (name, email, message) values (?,?,?)",
            [name, email, message]
        );
        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Failed to save message: " + error.message);
    }
};