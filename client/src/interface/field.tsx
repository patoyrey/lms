import { Field_Entity } from "../entity/fieldEntity";

export interface Field {
  Field_lab: {
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
  field: Field_Entity[];
}
