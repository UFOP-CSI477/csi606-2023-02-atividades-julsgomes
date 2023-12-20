import { prisma } from "../../database/client.js";

export class CreateDoacaoController {
    async handle(request, response) {
        try {
            const { pessoa_id, local_id, data } = request.body;

            const pessoaExists = await prisma.pessoas.findUnique({
                where: { id: pessoa_id }
            });

            if (!pessoaExists) {
                return response.status(404).json({ error: "Pessoa não encontrada." });
            }

            const localExists = await prisma.locais_coleta.findUnique({
                where: { id: local_id }
            });

            if (!localExists) {
                return response.status(404).json({ error: "Local de coleta não encontrado." });
            }

            const createDoacao = await prisma.doacoes.create({
                data: {
                    pessoa_id,
                    local_id,
                    data
                }
            });

            return response.json(createDoacao);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: error.message });
        }
    }
}
