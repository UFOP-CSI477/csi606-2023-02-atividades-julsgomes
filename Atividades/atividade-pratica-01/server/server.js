import express from 'express';
import { prisma } from "./src/database/client.js";
import { estadoRouter } from "./src/routes/estados.js";
import { cidadeRouter } from "./src/routes/cidades.js";
import { locaisRouter } from "./src/routes/locais.js";
import { doacoesRouter } from "./src/routes/doacoes.js";
import { pessoasRouter } from "./src/routes/pessoas.js";
import { tiposRouter } from "./src/routes/tipos.js";

const server = express();
const PORT = 5000;

// Middleware para analisar o corpo das requisições JSON
server.use(express.json());

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    });
});

server.use(estadoRouter);
server.use(cidadeRouter);
server.use(locaisRouter);
server.use(doacoesRouter);
server.use(pessoasRouter);
server.use(tiposRouter);

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
});
