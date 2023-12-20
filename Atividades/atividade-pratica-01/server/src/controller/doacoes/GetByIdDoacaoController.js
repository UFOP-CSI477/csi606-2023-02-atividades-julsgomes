import { prisma } from "../../database/client.js";
import { GetByIdCidadeController } from '../cidades/GetByIdCidadeController.js';

export class GetByIdDoacaoController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const getByIdDoacao = await prisma.doacoes.findUnique({
                where: {
                    id: Number(id)
                }
            });
            return response.json(getByIdDoacao);
        } catch (error) {
            console.error(error);
        }
    }
}