import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { identity } from "rxjs";
import { Info } from "./info-model";
import { InfoServices } from "./info-service";

@Controller('clientes')
export class InformacoesControler {
    constructor(private infoService: InfoServices) {

    }


    @Get()
    async obterTodos(): Promise<Info[]> {
        return this.infoService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Info> {
        return this.infoService.obterUm(params.id)
    }

    @Post()
    async criar(@Body() cliente: Info) {
        this.infoService.criar(cliente)
        return 'Cliente cadastrado'
    }

    @Put(':id')
    async alterar(@Param("id") ids , @Body() cliente: Info): Promise<Info> {
        return this.infoService.alterar(ids, cliente)

    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.infoService.apagar(params.id)
        return 'Cliente removido'
    }
}