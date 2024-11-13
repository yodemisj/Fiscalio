import express from "express";
import route from "./routes/route";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000; // Se a porta não estiver definida nas váriaveis de ambiente usa a porta 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(route);

app.listen(PORT, () => { // Inicia o servidor
    console.log(`Server running on http://localhost:${PORT}`);
});