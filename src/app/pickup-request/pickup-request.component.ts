import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PickupRequest} from '../pickup-request'


@Component({
  selector: 'app-pickup-request',
  templateUrl: './pickup-request.component.html',
  styleUrls: ['./pickup-request.component.css']
})
export class PickupRequestComponent implements OnInit {

  dropInformationGroup: FormGroup;
  truckFormGroup: FormGroup;
  contactInfoFormGroup: FormGroup;
  public pickupRequest = new PickupRequest();

  constructor(private _formBuilder: FormBuilder) {
  }
  ngOnInit() {
  }

}
