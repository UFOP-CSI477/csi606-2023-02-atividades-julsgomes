import { prisma } from "../../database/client.js";

export class DeleteLocalController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const local = await prisma.locais_coleta.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(local);
        } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
        }
    }
}