import { MongoClient, Db } from "mongodb";
import nextConnect from "next-connect";
import { NextApiRequest } from "next";

const client = new MongoClient(
  "mongodb+srv://root:12345@cluster0.yd412.mongodb.net/TopExercise?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export type ApiRequest = NextApiRequest & {
  db: Db;
};

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("TopExercise");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
