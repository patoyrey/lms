import { Request, Response } from "express";
import { TestFields } from "../models/TestFields";

export const addTestFieldsHandler = async (req: Request, res: Response) => {
  const { test_id, fields_id } = req.body;

  const promises = fields_id.map(async (result: any) => {
    const props = {
      test_id,
      fields_id: result.field_id,
      testfields_row: result.testfields_row,
    } as unknown as TestFields;
    const testfields = new TestFields(props);
    const response = await testfields.add();
    console.log(props);

    return response;
  });

  try {
    const response = await Promise.all(promises);

    // const jsonResponse = {
    //   succeeded: true,
    // };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);

    const errorResponse = {
      succeeded: false,
      error: "An error occurred while adding test fields.",
    };
  }
};
