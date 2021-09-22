import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGameDatails, IGames, IGamesFull} from "../intefaces/IGames";
import {IScrenShotsFull} from "../intefaces/IScreenshots";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  idUrl = 'https://api.rawg.io/api/games'
  key = '75680a18d0894f90a57b6e2070349042'
  basicUrl = 'https://api.rawg.io/api/games?key=75680a18d0894f90a57b6e2070349042'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<IGamesFull> {
    return this.httpClient.get<IGamesFull>(this.basicUrl)
  }

  getPagination(Newpage: number, filter = {}): Observable<IGamesFull> {
    return this.httpClient.get<IGamesFull>(this.idUrl, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
          page: Newpage,
          ...filter
        }
      })
    })
  }

  getById(id: number): Observable<IGameDatails> {
    return this.httpClient.get<IGameDatails>(`${this.idUrl}/${id}`, {
      params: new HttpParams({
        fromObject: {
          key: this.key,
        }
      })
    })
  }

  getScresnShots(slug: string): Observable<IScrenShotsFull> {
    return this.httpClient.get<IScrenShotsFull>(`${this.idUrl}/${slug}`,
      {
        params: new HttpParams({
          fromObject: {
            key: this.key,
          }
        })
      })
  }
}
