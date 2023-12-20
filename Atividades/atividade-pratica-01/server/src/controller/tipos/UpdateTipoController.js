import { prisma } from "../../database/client.js";

export class UpdateTipoController {
    async handle(request, response) {
        const { id, tipo, fator } = request.body;

        const tipoSanguineo = await prisma.tipos_sanguineos.update({
            where: {
                id: parseInt(id)
            },
            data: {
                tipo,
                fator
            }
        });

        return response.json(tipoSanguineo);
    }
}