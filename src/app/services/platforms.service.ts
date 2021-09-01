import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlatfomrFull} from "../intefaces/IPlatforms";

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  basicUrl = 'https://api.rawg.io/api/platforms?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    private httpClient:HttpClient
  ) { }
  getPagination(Newpage:number):Observable<IPlatfomrFull>{
    return this.httpClient.get<IPlatfomrFull>(this.basicUrl + `?page=${Newpage}`)
  }
}
