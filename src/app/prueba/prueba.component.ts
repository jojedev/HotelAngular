import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms/rooms';


@Component({
  selector: 'hinv-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  @Input() rooms: RoomList[] = [];
}
