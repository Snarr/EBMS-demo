import { createSecretKey } from "crypto";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false
  }
};

const get = async (req, res) => {
  let config = await fs.promises.readFile("./config.json")
  let configJSON = JSON.parse(config);
  res.status(200).json(configJSON);
}

export default (req, res) => {
  req.method === "POST"
    ? console.log("POST")
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
