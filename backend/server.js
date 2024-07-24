const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

const express = require('express')
const cors = require('cors');
const { PORT, HOST } = require('./config')


const app = express()
app.use(express.json());
app.use(cors())

app.use(cors({
    origin: 'http://localhost:3000' // Permitir solicitações apenas da porta 3000
  }));
  
//GET NOTICIAS

app.get('/noticias', async (req, res) => {
    try {
        const getAll = await prisma.noticia.findMany();
        res.status(200).json(getAll);
        console.log('noticias encontradas com sucesso')
    } catch (error) {
        console.error('Erro ao encontrar as notícias:', error);
        res.status(500).send('Erro ao executar a exibição das notícias');
    }
});


//GET BY ID NOTICIA

app.get ('/noticias/:id', async (req,res) => {
    const id_noticia = parseInt(req.params.id)

    try{
        const noticiasId = await prisma.noticia.findUnique({ where: {id_noticia}});
        res.status(200).json(noticiasId)
        console.log('noticia encontrada com sucesso')
    }catch(error){
        console.error('erro aao encontrar a noticia', error)
        res.status(500).send('erro ao encontrar a noticia')
    }
})


//POST NOTICIA

app.post('/enviar', async (req, res) => {
    const dados = req.body;

    try {

        const newNoticia = await prisma.noticia.create({
            data: {
                titulo: dados.titulo,
                subtitulo: dados.subtitulo,
                conteudo: dados.conteudo
            }});

        console.log('dados da nova noticia:', dados)
        res.status(200).json(newNoticia);
    } catch (error) {
        console.error('Erro ao criar notícia:', error);
        res.status(500).send('Erro ao criar notícia');
    }
});


//UPDATE NOTICIA

app.put('/atualizar/:id', async (req,res) => {
    const newDataUser = req.body
    const id_noticia = parseInt(req.params.id)

    try{
        const updateUser = await prisma.noticia.update({
            where: {id_noticia},
            data: newDataUser
        })
        
        console.log('noticia atualizada com sucesso:', updateUser)
        res.status(200).send('noticia atualizada com sucesso')
    }catch(error){
        console.error('erro ao atualizar noticias:', error)
        res.status(500).send('erro ao atualizar sua noticia')
    }
})


//DELETE NOTICIA

app.delete('/deletar/:id', async (req, res) => {
    const id_noticia = parseInt(req.params.id)

    try{
        const deletarNoticia = await prisma.noticia.delete({where: {id_noticia}})

        console.log('noticia deletada com sucesso', deletarNoticia)
        res.status(200).send(`noticia ${id_noticia} deletada com sucesso`)
    }catch(error){
        console.error('erro ao deletar noticia', error)
        res.status(500).send('erro ao deletar noticia')
    }
})


app.listen(PORT,() => {
    console.log(`servidor rodando no endereço ${HOST}:${PORT}`)
})
