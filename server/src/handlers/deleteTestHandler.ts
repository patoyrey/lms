import { Request, Response } from "express";
import { Test } from "../models/Test";

export const DeleteTestHanders = async (req: Request, res: Response) => {
  const test_id = req.params.test_id;

  const testfeildsDeleteQuery = "delete from testfields where test_id = ? ";
  const testQueryDelete = "delete from test where test_id = ?";
  const test = new Test(req.body);

  try {
    await test.delete(test_id, testfeildsDeleteQuery);
    await test.delete(test_id, testQueryDelete);

    res.status(200).json({ succeeded: true, msg: "Test Successfully Deleted" });
  } catch (error) {
    return res.send(400).json(error);
  }
};
