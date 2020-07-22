import nextConnect from "next-connect";
import middleware, { ApiRequest } from "../../middleware/database";
import { NextApiResponse } from "next";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: ApiRequest, res: NextApiResponse) => {
  let doc = await req.db.collection("ProgrammingLanguages").find();

  // console.log(doc.map((doc) => doc.languages));

  const data = await doc.toArray();

  res.json(data);
});

export default handler;
