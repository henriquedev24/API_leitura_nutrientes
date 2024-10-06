import express from "express";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(2000, () => {
    console.log(`servidor rodando na porta 2000`);
});

