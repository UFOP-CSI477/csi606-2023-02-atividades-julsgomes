import { prisma } from "../../database/client.js";

export class UpdateLocalController {
    async handle(request, response) {
        try {
            const {id, nome, rua, numero, complemento, cidade_id } = request.body;

            const local = await prisma.locais_coleta.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                        connect: { id: Number(cidade_id) }
                    }
                }
            });

            return response.json(local);
        } catch (error) {
            return response.status(500).json({
                error: error.message
            });
        }
    }
}