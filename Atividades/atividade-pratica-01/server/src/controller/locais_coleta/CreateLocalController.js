import { prisma } from "../../database/client.js";

export class CreateLocalController {
    async handle(request, response) {
        try {
            const { nome, rua, numero, complemento, cidade_id } = request.body;

            const local = await prisma.locais_coleta.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade_id
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