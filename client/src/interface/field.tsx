import { Field_Entity } from "../entity/fieldEntity";

export interface Field {
  field_lab: {
    field_id: string;
    field_name: string;
    unit: string;
    maleRefRange: string;
    femaleRefRange: string;
    RefRange: string;
    DesirableRefRange: string;
    borderlineRefRange: string;
    highRiskRefRange: string;
    other: string;
  };
  test_fields: {
    test_id: string;
    fields_id: [] | any;
  };
  editField: Field_Entity;
  field: Field_Entity[];
}
