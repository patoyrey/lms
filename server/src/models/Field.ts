export class Field {
   field_id: string
   field_name: string 
   
   constructor(init: Field){
        this.field_id = init.field_id
        this.field_name = init.field_name
   }
}