import { Request, Response } from "express";
import { queryFields } from "../utils/QueryFields";
import { Test } from "../models/Test";

export const RetrieveFieldTestHandler = async (req: Request, res: Response) => {
  const test = "select * from test  where test_id= ?";
  const fielquery =
    "select field.*,labtest.testfields_row,labtest.labtest_id  from labtest inner join field on labtest.fields_id = field.field_id where labtest.test_id = ? order by cast(testfields_row as signed) ";

  const { props } = req.body;
  const testresponse = (await queryFields(test, props)) as Test[];
  const field: any = await queryFields(fielquery, props);
  const fiedlSort = field.map((data: any, index: number) => {
    return {
      ...data,
      testfields_row: String(index + 1),
    };
  });
  const response = {
    ...testresponse[0],
    field: fiedlSort,
  };

  console.log("Response of test Fields", response);
  return res.status(200).json(response);
};
