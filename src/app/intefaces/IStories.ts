export interface IStories {
  id:number,
  name:string,
  domain:string,
  slug:string,
  games_count:number,
  image_background: string
}
export interface IStoriesFull {
  count:number,
  next:null,
  previous:null,
  results:IStories[]
}
