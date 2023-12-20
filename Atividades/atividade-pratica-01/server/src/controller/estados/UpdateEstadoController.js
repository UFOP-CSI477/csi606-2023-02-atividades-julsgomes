import { prisma } from "../../database/client.js";

export class UpdateEstadoController {
    async handle(request, response) {
        const {id, nome, sigla } = request.body;

        if (!id) {
            return response.status(400).json({ error: "ID is missing" });
        }

        const estado = await prisma.estado.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nome: nome,
                sigla: sigla,
                updated_at: new Date()
            }
        });

        return response.json(estado);
    }
}