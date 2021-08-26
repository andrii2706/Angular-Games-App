export interface IGames {
  id:number,
  slug:string,
  name:string,
  released: string,
  background_image:string
  tba:boolean,
  rating:number,
  rating_top:number,

}
export interface IGamesFull {
  count:number,
  next:string,
  previous:string,
  results:IGames[]
}
// export interface IPoster {
//   background_image:string
// }
