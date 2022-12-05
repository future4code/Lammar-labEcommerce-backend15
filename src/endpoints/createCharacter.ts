import connection from "../connection";
import { Request, Response } from "express";


export default async function createCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, gender, description } = req.body;

    await connection("character").insert({ name, gender, description });
   
  } catch (error) {
    res.status(500).end();
  }
  res.status(201).end();
}
