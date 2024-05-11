import express from 'express';
import subtitles from './subtitles.mjs';
import {templeteAgrupamento, traduzindoTodoOtexto, perguntas } from './prompts.mjs';
import gemini from './gemini.mjs'; 
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.post('/subtitulo-existe', async (req, res)  => { 

    const dados = req.body; 
    console.log(dados);
    const sub = await subtitles(dados.serie, dados.temporada, dados.episodio);
    console.log(sub);
    res.json({existe: sub.length > 0});
});

app.post('/searching', async (req, res)  => {
    const result = {};
    const dados = req.body; 
    console.log(dados);
    const sub = await subtitles(dados.serie, dados.temporada, dados.episodio);
        console.log('agrupando por: ', dados.filter);
        const template = getTemplate(dados.filter, sub);
        const json = await gemini(template);    
  res.json(trataResponse(dados.filter, json, sub));
});

function getTemplate(filter, sub) {
    if(filter == 'tradução completa') {
        return traduzindoTodoOtexto(sub);
    } else if(filter == 'perguntas') {
        return perguntas(sub);
    } else {
        return templeteAgrupamento(filter, sub);
    }
}

function trataResponse(filtro, json, sub) {
if(filtro == 'tradução completa') {
        return {ingles: sub, portugues: json};
    } else {
        return json;
    }
}


app.listen(3000, () => console.log('Servidor iniciado na porta 3000'))