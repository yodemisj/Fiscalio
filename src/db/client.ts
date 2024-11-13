import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'fiscalio',
    password: process.env.DB_PASSWORD || '1234',
    port: process.env.DB_PORT ? parseInt( process.env.DB_PORT ) : 5432,
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export default client; // O padrão de módulos do javascript por padrão funciona como um singleton