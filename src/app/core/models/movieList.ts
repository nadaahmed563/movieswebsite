export interface movieList{
    id :number,
    name:string,
    image:string,
    description:string,
    category_id:number 
}
export interface message{
    message: Array<movieList>
}