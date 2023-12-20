import { prisma } from "../../database/client.js";

export class CreateTipoController {
    async handle(request, response) {
        const { tipo, fator } = request.body;
        try {
            const tipoSanguineo = await prisma.tipos_sanguineos.create({
                data: {
                    tipo,
                    fator
                }
            });
            return response.json(tipoSanguineo);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}