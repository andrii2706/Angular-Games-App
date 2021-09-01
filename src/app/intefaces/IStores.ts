export interface IStores {
  "id": number,
  "name": string,
  "domain": string,
  "slug": string,
  "games_count": number,
  "image_background": string,
}
export interface IStoreFull {
  count: number,
  results: IStores[]
}
