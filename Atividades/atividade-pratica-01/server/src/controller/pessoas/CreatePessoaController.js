import { prisma } from "../../database/client.js";

export class CreatePessoaController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;
        try {
            // Verifique se os IDs de cidade e tipo sanguíneo existem
            const cidade = await prisma.cidade.findUnique({ where: { id: cidade_id } });
            const tipoSanguineo = await prisma.tipos_sanguineos.findUnique({ where: { id: tipo_id } });

            if (!cidade || !tipoSanguineo) {
                return response.status(404).json({
                    message: "Cidade ou tipo sanguíneo não encontrado."
                });
            }

            const pessoa = await prisma.pessoas.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    },
                    tipo: {
                        connect: {
                            id: tipo_id
                        }
                    }
                },
                include: {
                    cidade: true,
                    tipo: true
                }
            });
            return response.json(pessoa);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
