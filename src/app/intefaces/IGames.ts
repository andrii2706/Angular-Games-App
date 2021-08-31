export interface IPlatforms {
  platform:{ "id": number,
    "name": string,
    "slug": string,
    "image": null,
    "year_end": null,
    "year_start": number,
    "games_count": number,
    "image_background": string
  }
}
export interface IGames {
  id:number,
  slug:string,
  name:string,
  released: string,
  background_image:string
  tba:boolean,
  rating:number,
  rating_top:number,
  // platforms:IPlatforms[]
  platforms: [IPlatforms]

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

