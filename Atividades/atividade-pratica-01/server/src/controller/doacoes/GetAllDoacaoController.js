import { prisma } from "../../database/client.js";

export class GetAllDoacaoController {
    async handle(request, response) {
        try {
            const allDoacoes = await prisma.doacoes.findMany();
            return response.json(allDoacoes);
        } catch (error) {
            console.error(error);
        }
    }
}