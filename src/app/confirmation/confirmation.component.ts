import { Component, OnInit, Input } from '@angular/core';
import {PickupRequest} from '../pickup-request'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() pickupRequest = new PickupRequest();

  constructor() { }

  ngOnInit() {
  }

}
