import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.end("{}");
  } else {
    res.end(`NO`);
  }
};
