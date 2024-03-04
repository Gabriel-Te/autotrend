const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

const express = require('express')
const { PORT, HOST } = require('./config')


const app = express()
app.use(express.json());

async function criarNoticia(dados) {
    try {
        const noticia = await prisma.noticia.create({
            data: {
                titulo: dados.titulo,
                subtitulo: dados.subtitulo,
                conteudo: dados.conteudo
            }
        });
        console.log("Notícia criada:", noticia);
    } catch (error) {
        console.error('Erro ao criar notícia no banco de dados:', error);
        throw error;
    }
}

app.post('/enviar', async (req, res) => {
    const dados = req.body;

    try {
        await criarNoticia(dados);
        res.status(200).send('Notícia criada com sucesso');
    } catch (error) {
        console.error('Erro ao criar notícia:', error);
        res.status(500).send('Erro ao criar notícia');
    }
});

app.listen(PORT,() => {
    console.log(`servidor rodando no endereço ${HOST}:${PORT}`)
})

