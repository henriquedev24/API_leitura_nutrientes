import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post('/consultar/', async (req, res) => { 
    await prisma.consulting.create({ 
        data: req.body.codeBar 
    });
    res.status(201).json(req.body);
})

app.get('/consulta/:id', async (req, res) => {
    let consult: any[] = [];

    if (req.query) {
        consult = await prisma.consulting.findMany({
            where: {
                id: parseInt(req.params.id)
            }
        })
    }
    const consults = consult.map(consult => {
        return {
            id: consult.id,
            codeBar: consult.codeBar
        }
    })
    res.json(consults);
})

app.delete('/consulta/:id', async (req, res) => {
    await prisma.consulting.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.status(200).send('Consulta excluida com sucesso!');
})

app.listen(2000)