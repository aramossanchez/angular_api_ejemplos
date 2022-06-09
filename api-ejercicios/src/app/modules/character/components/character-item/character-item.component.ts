import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../../../models/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

  @Input()
  character?: Character;

  @Output()
  characterSelected = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

}
