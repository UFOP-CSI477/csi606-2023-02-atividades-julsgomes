import { prisma } from "../../database/client.js";

export class DeleteDoacaoController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const doacaoExistente = await prisma.doacoes.findUnique({
                where: { id: parseInt(id) },
            });
            if (!doacaoExistente) {
                return response.status(404).json({ error: "Doação não encontrada." });
            }
            const doacaoDeletada = await prisma.doacoes.delete({
                where: { id: parseInt(id) },
            });
            return response.json(doacaoDeletada);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao deletar a doação." });
        }
    }
}
