import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const pessoa = await prisma.pessoas.findUnique({
                where: {
                    id: Number(id)
                }
            });
            return response.json(pessoa);
        } catch (error) {
            console.error(error); // Bom para depuração
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}