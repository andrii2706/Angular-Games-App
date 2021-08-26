import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStories, IStoriesFull} from "../intefaces/IStories";

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  storiesUrl = 'https://api.rawg.io/api/stores?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    private httpClient:HttpClient
  ) { }
  // getAllStories():Observable<IStoriesFull>{
  //   return this.httpClient.get<IStoriesFull>(this.storiesUrl)
  // }
  // getAllStories():Observable<IStoriesFull>{
  //   return this.httpClient.get<IStoriesFull>(this.storiesUrl)
  // }

}
