import { prisma } from "../../database/client.js";

export class GetAllPessoaController {
    async handle(request, response) {
        try {
            const pessoas = await prisma.pessoas.findMany();
            return response.json(pessoas);
        } catch (error) {
            console.error(error); // Bom para depuração
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}