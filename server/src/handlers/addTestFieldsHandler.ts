import { Request, Response } from "express";
import { TestFields } from "../models/TestFields";
import { queryFields, retrieveData } from "../utils/QueryFields";

export const addTestFieldsHandler = async (req: Request, res: Response) => {
  const { test_id, fields_id } = req.body;

  let incrementSize = 1;
  const test = `select count(test_id) as size from labtest  where test_id = "${test_id}"`;
  const countSize: any = await retrieveData(test);
  incrementSize += Number(countSize[0].size);
  const promises = fields_id.map(async (result: any) => {
    const props = {
      test_id,
      fields_id: result.field_id,
      testfields_row: incrementSize++,
    } as unknown as TestFields;
    const testfields = new TestFields(props);
    const response = await testfields.add();

    return response;
  });

  try {
    const response = await Promise.all(promises);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);

    const errorResponse = {
      succeeded: false,
      error: "An error occurred while adding test fields.",
    };
  }
};
