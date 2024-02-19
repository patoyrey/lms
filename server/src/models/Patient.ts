import uuid4 from "uuid4"
import { Gender } from "../enums/Gender"
import { UserResponse } from "../response/userResponse"
import { conn } from "../config/dbconfig/db_connection"


export class Patient {
    patient_id: string
    user_id: string
    patient_fname: string
    patient_mname: string
    patient_lname: string
    patient_gender: Gender
    patient_address: string
    company: string
    date_of_visit: string
    referred_name: string
    patient_dob: string
    patient_age: number
    created_at: string
    updated_at: string
    constructor(init: Patient) {
        this.patient_id = init.patient_id
        this.user_id = init.user_id
        this.patient_fname = init.patient_fname
        this.patient_mname = init.patient_mname
        this.patient_lname = init.patient_lname
        this.patient_gender = init.patient_gender
        this.patient_address = init.patient_address
        this.company = init.company
        this.date_of_visit = init.date_of_visit
        this.referred_name = init.referred_name
        this.patient_dob = init.patient_dob
        this.patient_age = init.patient_age
        this.created_at = init.created_at
        this.updated_at = init.updated_at
    }
    public async add(): Promise<UserResponse> {
        // this.patient_id = uuid4();

        const query = `insert into patient SET ?`;
        console.log("query: ", query);
        await conn.query(query, [this], (err: any) => {
            if (err) {
                return {
                    succeeded: false,
                    msg: err,
                };
            }
        });

        return {
            succeeded: true,
            msg: "",
        };
    }

}