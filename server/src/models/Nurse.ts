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
}