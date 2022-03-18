import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table
export class Info extends Model<Info> {
    
    @Column({
        type: DataType.STRING(),
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    peso: number;

    @Column({
        type: DataType.DECIMAL(5, 2),
        allowNull: false,
    })
    altura: number;

    @Column({
        type: DataType.DECIMAL(5, 2),
        allowNull: false,
    })
    gordura: number;

    @Column({
        type: DataType.DECIMAL(5, 2),
        allowNull: false,
    })
    imc: number;


}