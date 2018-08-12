import { Component, OnInit, Input } from '@angular/core';
import { Truck } from '../truck';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {PickupRequest} from '../pickup-request'

@Component({
  selector: 'app-truck-information',
  templateUrl: './truck-information.component.html',
  styleUrls: ['./truck-information.component.css']
})
export class TruckInformationComponent implements OnInit {

  @Input() pickupRequest = new PickupRequest();
  selectedTruck: Truck;

  trucks: Truck[] = [{
    type: "type1",
    imagePath: 'assets/img/truck-1.jpeg'
  }, {
    type: "type2",
    imagePath: 'assets/img/truck-2.jpeg'
  }];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'price',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/price.svg'));
  }

  ngOnInit() {
    this.selectedTruck = this.trucks[0];
    this.pickupRequest.pickupTruckType = this.selectedTruck.type;
  }
  changeSelectedTruck(truck: Truck) {
    this.selectedTruck= truck;
    this.pickupRequest.pickupTruckType = truck.type;
  }
}
