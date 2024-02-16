export class Admin {
    admin_id: string
    user_id: string
    fname: string
    lname: string
    mname: string
    updated_at: string
    created_at: string


    constructor(init: Admin){
        this.admin_id = init.admin_id
        this.user_id = init.user_id
        this.fname = init.fname
        this.lname = init.lname
        this.mname = init.mname
        this.updated_at = init.updated_at
        this.created_at = init.created_at
        
    }
}