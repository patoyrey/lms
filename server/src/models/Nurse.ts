
import { NurseResponse } from "../response/nurseResponse";
import { queryFields } from "../utils/QueryFields"
import uuid4 from "uuid4";


export class Nurse {
    nurse_id: string
    fname: string
    lname: string
    mname: string
    created_at: string
    updated_at: string
    user_id: string

    constructor(init: Nurse){
        this.nurse_id = init.nurse_id
        this.fname = init.fname
        this.lname = init.lname
        this.mname =init.mname
        this.created_at = init.created_at
        this.updated_at = init.updated_at
        this.user_id = init.user_id
    }
    public async add(): Promise<NurseResponse> {
        this.nurse_id = uuid4();
        const query = `insert into nurse SET ?`;
        console.log(query);
        
        queryFields(query, this);
        return {
          succeeded: true,
          msg: "",
        };
      }


}