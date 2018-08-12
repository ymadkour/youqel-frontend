import { Component, OnInit, Input } from '@angular/core';
import {PickupRequest} from '../pickup-request'
import { PickupRequestService } from '../pickup-request.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {
  
  @Input() pickupRequest = new PickupRequest();

  constructor(private pickupRequestService: PickupRequestService) { }

  ngOnInit() {
  }

  addRequest(request: PickupRequest): void {
    this.pickupRequestService.addPickupRequest(request);
  }

}
