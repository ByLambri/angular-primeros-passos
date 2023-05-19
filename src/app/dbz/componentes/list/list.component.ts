import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
    ]

    @Output()
    public  onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter( id?: string): void {
     //Todo: Emitir el ID del personaje a eliminar

     if(!id) return;

     console.log(id);
      this.onDelete.emit( id );
    }
}
