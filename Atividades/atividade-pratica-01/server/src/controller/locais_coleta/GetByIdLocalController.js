import { prisma } from "../../database/client.js";

export class GetByIdLocaisController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const local = await prisma.locais_coleta.findUnique({
                where: {
                    id: Number(id)
                },
                include: {
                    cidade: true
                }
            });

            return response.json(local);
        } catch (error) {
            return response.json({
                error: error.message
            });
        }
    }
}