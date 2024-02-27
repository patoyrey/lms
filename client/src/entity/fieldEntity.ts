export class Field_Entity {
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
  createdAt: string;
  updatedAt: string;

  constructor(init: Field_Entity) {
    this.field_id = init.field_id;
    this.field_name = init.field_name;
    this.unit = init.unit;
    this.maleRefRange = init.maleRefRange;
    this.femaleRefRange = init.femaleRefRange;
    this.RefRange = init.RefRange;
    this.DesirableRefRange = init.DesirableRefRange;
    this.borderlineRefRange = init.borderlineRefRange;
    this.highRiskRefRange = init.highRiskRefRange;
    this.other = init.other;
    this.createdAt = init.createdAt;
    this.updatedAt = init.updatedAt;
  }
}
