import { FieldResponse } from "../response/fieldResponse";
import uuid4 from "uuid4";
import { HmoResponse } from "../response/hmoResponse";
import { queryFields } from "../utils/QueryFields";
export class Hmo {
  hmo_id: string;
  hmo_name: string;
  contact_person: string;
  email_address: string;
  contact_number: string;
  link_to_rates: string;
  hmo_status: string;
  created_At: string;
  updated_At: string;

  constructor(init: Hmo) {
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
  public async add(): Promise<HmoResponse> {
    this.hmo_id = uuid4();
    this.created_At = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Singapore",
    });
    const query = `insert into hmo SET ?`;

    console.log(this);
    console.log(query);

    queryFields(query, this);
    return {
      succeeded: true,
      msg: "",
    };
  }
  public async update(hmoId: any): Promise<FieldResponse> {
    this.updated_At = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Singapore",
    });
    const query = "update hmo SET ? where hmo_id = ?";
    queryFields(`update hmo SET ? where hmo_id = "${hmoId}"`, this);
    return {
      succeeded: true,
      msg: "",
    };
  }
  public async delete(hmoId: any): Promise<HmoResponse> {
    await queryFields(`DELETE FROM hmo WHERE hmo_id = "${hmoId}"`, this);
    return {
      succeeded: true,
      msg: "",
    };
  }
}
