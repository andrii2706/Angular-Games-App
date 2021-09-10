export interface IPlatforms{
  "id": number,
  "name": string,
  "slug": string,
  "games_count": number,
  "image_background": string,
  "image": null,
  "year_start": null,
  "year_end": null,
  "games":[IGamesOnPlatform]
}
export interface IPlatfomrFull {
  count:number,
  results:IPlatforms[]
}
export interface IGamesOnPlatform{
  id:number,
  slug:string,
  name: string,
  added: number
}
