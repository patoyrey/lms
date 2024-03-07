export class TestFieldsEntity {
  labtest_id: string;
  testfields_row: string;
  test_id: string;
  test_name: string;
  test_price: number;
  test_desc: string;
  test_created_at: string;
  test_updated_at: string;
  constructor(init: TestFieldsEntity) {
    this.labtest_id = init.labtest_id;
    this.testfields_row = init.testfields_row;
    this.test_id = init.test_id;
    this.test_name = init.test_name;
    this.test_price = init.test_price;
    this.test_desc = init.test_desc;
    this.test_created_at = init.test_created_at;
    this.test_updated_at = init.test_updated_at;
  }
}
