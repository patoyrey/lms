import { Request, Response } from "express";
import { TestFields } from "../models/TestFields";

export const UpdateTestFieldsHandlers = async (req: Request, res: Response) => {
  const data = req.body.props;

  let sortData = data.sort((a: any, b: any) => {
    if (Number(a.testfields_row) < Number(b.testfields_row)) {
      return -1;
    } else if (Number(a.testfields_row) > Number(b.testfields_row)) {
      return 1;
    } else if (Number(a.testfields_row) === Number(b.testfields_row)) {
      return -1;
    } else {
      return 0;
    }
  });

  sortData = sortData.map((data: any, index: number) => {
    return {
      ...data,
      testfields_row: String(index + 1),
    };
  });

  const response = await sortData.forEach(async (item: any) => {
    const testfieldCurrent = new TestFields(item);
    const res = await testfieldCurrent.update();
    return res;
  });
  res.status(200).json(response);
};
