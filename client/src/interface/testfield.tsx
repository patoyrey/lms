import { TestFieldsEntity } from "../entity/testfieldEntit";
import { Test } from "./test";

export interface TestField {
  test_id: string;
  test_name: string;
  test_price: number;
  test_desc: string;
  test_created_at: string;
  test_updated_at: string;
  field: TestFieldsEntity[];
}
