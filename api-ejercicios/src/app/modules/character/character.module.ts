import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterItemComponent,
    CharacterDetailComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
