import { Hmo_Entity } from "../entity/hmoEntity";

export interface HmoInterface {
  hmo_data: {
    hmo_id: string;
    hmo_name: string;
    contact_person: string;
    email_address: string;
    contact_number: string;
    link_to_rates: string;
    hmo_status: string;
    created_At: string;
    updated_At: string;
  };
  hmo_array: Hmo_Entity[];
  editHmo: Hmo_Entity;
}
