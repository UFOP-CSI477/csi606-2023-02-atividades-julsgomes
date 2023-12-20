import { prisma } from "../../database/client.js";

export class GetByIdTipoController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const tipoSanguineo = await prisma.tipos_sanguineos.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!tipoSanguineo) {
                return response.status(404).json({
                    message: "Tipo sanguíneo não encontrado."
                });
            }
            return response.json(tipoSanguineo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}