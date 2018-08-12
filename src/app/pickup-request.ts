import { ContactInformation } from "./contact-information";

export class PickupRequest {

    public pickupLocation: string
    public dropoffLocation: string
    public pickupDate: Date
    public pickupTruckType: string
    public details: string
    public shipper: ContactInformation
    public receipient: ContactInformation
    public checked: boolean

    constructor() {
        this.shipper = new ContactInformation();
        this.receipient = new ContactInformation();
    }
}
