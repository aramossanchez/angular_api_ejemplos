import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter (): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character?page=2');
  }
}
