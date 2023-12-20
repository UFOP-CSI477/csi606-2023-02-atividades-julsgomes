import { prisma } from "../../database/client.js";

export class GetAllLocaisController {
    async handle(request, response) {
        try {
            const locais = await prisma.locais_coleta.findMany({
                include: {
                    cidade: true
                }
            });
            return response.json(locais);
        } catch (error) {
            return response.json({
                error: error.message
            });
        }
    }
}