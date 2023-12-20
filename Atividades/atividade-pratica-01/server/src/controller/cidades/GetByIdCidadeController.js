import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {
    async handle(request, response) {
        const { id } = request.params;

        const cidade = await prisma.cidade.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                nome: true,
                estado: {
                    select: {
                        id: true,
                        nome: true,
                        sigla: true
                    }
                }
            }
        });

        return response.json(cidade);
    }
}