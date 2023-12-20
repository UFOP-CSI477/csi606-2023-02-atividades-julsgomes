import { prisma } from "../../database/client.js";

export class DeleteTipoController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const tipoDeletado = await prisma.tipos_sanguineos.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json(tipoDeletado);
        } catch (error) {
            console.error(error);
            if (error.code === 'P2025') {
                return response.status(404).json({ error: "Tipo sanguíneo não encontrado." });
            }
            return response.status(500).json({ error: "Erro ao deletar o tipo sanguíneo." });
        }
    }
}
