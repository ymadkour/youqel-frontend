import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {PickupRequest} from '../pickup-request'

@Component({
  selector: 'app-drop-information',
  templateUrl: './drop-information.component.html',
  styleUrls: ['./drop-information.component.css']
})
export class DropInformationComponent implements OnInit {

  @Input() pickupRequest = new PickupRequest();
  public selectedMoment = new Date();
  required= true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'pickup',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/pickup.svg'));

      iconRegistry.addSvgIcon(
        'drop_off',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/drop-off.svg'));
  }

  ngOnInit() {
  }

}
