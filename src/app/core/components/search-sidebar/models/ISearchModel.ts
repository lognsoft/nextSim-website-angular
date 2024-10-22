export interface ISearchModel{
    search:string,
    categories: any[],
    price:{
        min_price:string,
        max_price:string,
    },
    area:{
        min_area:string,
        max_area:string,
    },
    quartos:string,
    banheiros:string,
    garagens:string
}