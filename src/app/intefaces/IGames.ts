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

export interface IGameDatails {
  id: number,
  slug: string,
  name: string,
  name_original: string,
  description: string,
  metacritic: number,
  metacritic_platforms:[{
    metascore:number,
    url: string,
    platform:{
      name: string
    }

  }],
  "released": string,
  "tba": false,
  "updated": string,
  "background_image": string,
  "background_image_additional": string,
  "website": string,
  "rating": number,
  "rating_top": number,
  "ratings":[
    {
      "id": number,
      "title": string,
      "count": number,
      "percent": number
    }
  ],
  "reactions": {
    "1": number,
    "2": number,
    "3": number,
    "4": number,
    "5": number,
    "6": number,
    "7": number,
    "8": number,
    "9": number,
    "10": number,
    "11": number,
    "12": number,
    "14": number,
    "15": number,
    "16": number,
    "18": number,
    "20": number,
    "21": number
  },
}
export interface IScreenShots {
  id:number,
  image:string
}
export interface IScreenShotsFull {
  count: number,
  results:IScreenShots[]
}
