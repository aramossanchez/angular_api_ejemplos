import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../character.service';
import { Character } from '../../../../models/character.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character$?: Observable<Character>;
  
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => this.character$ = this.characterService.getCharacterById(params.id),
      (error) => console.error(error)
    )
  }

}
