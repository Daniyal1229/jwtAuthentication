import mongoose from "mongoose";

const db = async()=>{
    try {
        let conn = await mongoose.connect('mongodb://localhost:27017/authDB');
        if (conn) {
            console.log(`mongoDB connected to ${conn.connection.host}`);
        } else {
            console.log('failed to connected to database');
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default db;