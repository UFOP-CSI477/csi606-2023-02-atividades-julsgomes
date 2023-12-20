import { prisma } from "../../database/client.js";

export class GetAllTipoController {
    async handle(request, response) {
        try {
            const tipos = await prisma.tipos_sanguineos.findMany();
            return response.json(tipos);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}