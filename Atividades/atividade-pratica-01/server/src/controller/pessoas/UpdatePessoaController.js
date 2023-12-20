import { prisma } from "../../database/client.js";

export class UpdatePessoaController {
    async handle(request, response) {
        const { id, nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        try {
            const pessoaAtualizada = await prisma.pessoas.update({
                where: { id },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade: { connect: { id: cidade_id } },
                    tipo: { connect: { id: tipo_id } },
                },
            });

            return response.json(pessoaAtualizada);
        } catch (error) {
            console.error(error);

            if (error.code) {
                switch (error.code) {
                    case 'P2025':
                        return response.status(404).json({ error: 'Registro não encontrado.' });
                    case 'P2002':
                        return response.status(409).json({ error: 'Os dados fornecidos violam uma restrição única.' });
                    default:
                        break;
                }
            }
            if (error instanceof Prisma.PrismaClientValidationError || error instanceof Prisma.PrismaClientKnownRequestError) {
                return response.status(400).json({ error: error.message });
            }
            return response.status(500).json({ error: 'Erro ao atualizar a pessoa.' });
        }
    }
}
