export interface IScreenShots {
  id: number,
  image: string,
  "width": number
  "height": number,
  "is_deleted": boolean
}

export interface IScrenShotsFull {
  count: number,
  next: null,
  previos: null,
  results: IScreenShots[]
}
