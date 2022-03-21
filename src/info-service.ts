import { Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Info } from "./info-model";

@Injectable()
export class InfoServices {
    constructor(
        @InjectModel(Info)
        private infoModel: typeof Info
    ) { }


    async obterTodos(): Promise<Info[]> {
        return this.infoModel.findAll();
    }

    async obterUm(id: number): Promise<Info> {
        const one = await this.infoModel.findByPk(id);
        if (!one) {
            throw new NotFoundException("");
        }
        return one
    }

    async criar(cliente: Info) {
        this.validaPaciente(cliente);
        return await this.infoModel.create(cliente);
    }

    async alterar(ids: number, cliente: Info): Promise<Info> {
        const t = await this.obterUm(ids);
        this.validaPaciente(cliente);
        t.update(cliente);
        return cliente;
    }

    async apagar(id: number) {
        const cliente: Info = await this.obterUm(id)
        cliente.destroy();
    }

    private validaPaciente(cliente: Info) {

        var pesoEhValido = this.validaPeso(cliente);
        var alturaEhValida = this.validaAltura(cliente);

        if (!pesoEhValido) {
            throw new UnprocessableEntityException(`O peso do cliente é inválido (${cliente.peso})`);
        }

        if (!alturaEhValida) {
            throw new UnprocessableEntityException(`A altura do cliente é inválida (${cliente.altura})`)
        }
    }

    private validaPeso(cliente: Info) {
        return cliente.peso > 0 && cliente.peso < 500;
    }

    private validaAltura(cliente: Info) {
        return cliente.altura > 0 && cliente.altura <= 3.00;
    }
}
