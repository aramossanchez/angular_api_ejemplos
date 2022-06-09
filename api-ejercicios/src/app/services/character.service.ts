import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character-response.interface';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter (): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character?page=2');
  }

  getCharacterById (id:string): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
