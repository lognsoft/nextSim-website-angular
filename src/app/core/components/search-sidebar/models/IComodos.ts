export interface IComodos{
    quartos: IComodo[];
    banheiros: IComodo[];
    garagens: IComodo[];
}

type IComodo = {
    id:number;
    name:string;
    slug:string;
}