import { prisma } from "../../database/client.js";

export class UpdateDoacaoController {
    async handle(request, response) {
        const { id, data, pessoa_id, local_id } = request.body;
        try {
            const doacaoExistente = await prisma.doacoes.findUnique({
                where: { id: Number(id) },
            });
            if (!doacaoExistente) {
                return response.status(404).json({ error: "Doação não encontrada." });
            }
            const pessoaExists = await prisma.pessoas.findUnique({
                where: { id: Number(pessoa_id) },
            });
            const localExists = await prisma.locais_coleta.findUnique({
                where: { id: Number(local_id) },
            });
            if (!pessoaExists || !localExists) {
                return response.status(404).json({ error: "Pessoa ou local de coleta não encontrado." });
            }

            // Atualize a doação
            const doacaoAtualizada = await prisma.doacoes.update({
                where: { id: Number(id) },
                data: {
                    data: data,
                    pessoa_id: Number(pessoa_id),
                    local_id: Number(local_id),
                },
            });
            return response.json(doacaoAtualizada);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao atualizar a doação." });
        }
    }
}
