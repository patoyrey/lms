export class Hmo_Entity {
  hmo_id: string;
  hmo_name: string;
  contact_person: string;
  email_address: string;
  contact_number: string;
  link_to_rates: string;
  hmo_status: string;
  created_At: string;
  updated_At: string;
  constructor(init: Hmo_Entity) {
    this.hmo_id = init.hmo_id;
    this.hmo_name = init.hmo_name;
    this.contact_person = init.contact_person;
    this.email_address = init.email_address;
    this.contact_number = init.contact_number;
    this.link_to_rates = init.link_to_rates;
    this.hmo_status = init.hmo_status;
    this.created_At = init.created_At;
    this.updated_At = init.updated_At;
  }
}
