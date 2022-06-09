import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../character.service';
import { Character } from '../../../../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    console.log('el componente se ha montado');
    this.characterService.getCharacter().subscribe(
      (res) => {
        this.characters = res.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  setCharacter(character: Character) {
    console.log(character);
  }

}
