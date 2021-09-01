import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStoreFull} from "../intefaces/IStores";

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  baseUrl = 'https://api.rawg.io/api/stores?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    private httpClient:HttpClient
  ) { }
  getAll():Observable<IStoreFull>{
    return this.httpClient.get<IStoreFull>(this.baseUrl)
  }
}
