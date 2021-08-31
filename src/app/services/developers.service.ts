import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGamesFull} from "../intefaces/IGames";
import {IDevelopersFull} from "../intefaces/IDevelopers";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  basicUrl = 'https://api.rawg.io/api/developers?key=75680a18d0894f90a57b6e2070349042'
  constructor(
    private httpClient:HttpClient
  ) { }
  getAll():Observable<IDevelopersFull>{
    return this.httpClient.get<IDevelopersFull>(this.basicUrl)
  }
  getPagination(Newpage:number):Observable<IDevelopersFull>{
    return this.httpClient.get<IDevelopersFull>(this.basicUrl+ `&page=${Newpage}`)
  }
}
