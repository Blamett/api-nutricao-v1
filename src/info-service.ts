import { Injectable, NotFoundException } from "@nestjs/common";
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
        this.infoModel.create(cliente);
    }

    async alterar(ids: number, cliente: Info): Promise<Info> {
        const t = await this.obterUm(ids);
        t.update(cliente);
        return cliente;
        // return this.infoModel.update(cliente, cliente.id);
    }

    async apagar(id: number) {
        const cliente: Info = await this.obterUm(id)
        cliente.destroy();
    }
}
