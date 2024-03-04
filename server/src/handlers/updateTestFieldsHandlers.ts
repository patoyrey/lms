import { Request, Response } from "express";
import { TestFields } from "../models/TestFields";

export const UpdateTestFieldsHandlers = async (req: Request, res: Response) => {
  const { currentData, nextData } = req.body.props;
  const updateCurrentData = {
    testfields_row: nextData.testfields_row,
    testfields_id: currentData.testfields_id,
  };

  const updateNextData = {
    testfields_id: nextData.testfields_id,
    testfields_row: currentData.testfields_row,
  };

  console.log("updateCurrentData", updateCurrentData);
  console.log("updateNextData", updateNextData);
  try {
    const testfieldCurrent = new TestFields(req.body);
    const testfieldNext = new TestFields(req.body);
    await testfieldCurrent.update(
      updateCurrentData.testfields_row,
      updateCurrentData.testfields_id
    );
    await testfieldNext.update(
      updateNextData.testfields_row,
      updateNextData.testfields_id
    );

    return res.status(200).json({ succeeded: true, msg: "" });
  } catch (error) {
    return res.status(400).json({ succeeded: false, msg: error });
  }
};
