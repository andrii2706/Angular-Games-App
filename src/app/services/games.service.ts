import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGameDatails, IGames, IGamesFull} from "../intefaces/IGames";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // https://api.rawg.io/api/games/1?key=75680a18d0894f90a57b6e2070349042
  IdUrl = 'https://api.rawg.io/api/games/'
  keyUrl= '?key=75680a18d0894f90a57b6e2070349042'
basicUrl = 'https://api.rawg.io/api/games?key=75680a18d0894f90a57b6e2070349042'
  constructor(
    private httpClient:HttpClient
  ) { }
  getAll():Observable<IGamesFull>{
   return this.httpClient.get<IGamesFull>(this.basicUrl)
  }
  getPagination(Newpage:number):Observable<IGamesFull>{
  return this.httpClient.get<IGamesFull>(this.basicUrl+ `&page=${Newpage}`)
  }
  getById(id:number):Observable<IGameDatails>{
    return this.httpClient.get<IGameDatails>(this.IdUrl + id + this.keyUrl)
  }
  // getPlatforms():Observable<IGames>{
  //   return this.httpClient.get<IGames>(this.basicUrl)
  // }
  // getPoster():Observable<IPoster[]>{
  // return this.httpClient.get<IPoster[]>(this.posterUrl + '/'+ )
  // }
}
