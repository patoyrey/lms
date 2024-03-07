import { Test_Entity } from "../entity/testEntity";

export interface Test {
  test_lab: {
    test_id: string;
    test_name: string;
    test_price: number;
    test_desc: string;
    test_created_at: string;
    test_updated_at: string;
  };
  tests: Test_Entity[];
  test_update: Test_Entity;
  test_id: string;
}
