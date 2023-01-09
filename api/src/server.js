import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

import {
  mapPriceScoreToRating,
  mapAccessibilityScoreToRating,
  checkUserProfile,
  capitalizeFirstLetter,
  mapPriceRatingToQueryParam,
  mapAccessibilityRatingToQueryParam,
} from "./utils.js";
import { activityApiBaseUrl } from "./constants.js";

const app = express();
const port = 3001;

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "./db.json");

// // Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);
const db = new Low(adapter);
db.read();
db.data ||= { users: [] };

app.use(cors());
app.use(bodyParser.json());

app.get("/activity", async (req, res) => {
  db.read();
  const currentUser = db.data.users.at(-1);

  const activityUrl = currentUser
    ? `${activityApiBaseUrl}?${mapPriceRatingToQueryParam(
        currentUser.price
      )}&${mapAccessibilityRatingToQueryParam(currentUser.accessibility)}`
    : activityApiBaseUrl;

  await axios.get(activityUrl).then(
    (response) => {
      const activityData = {
        ...response.data,
        price: mapPriceScoreToRating(response.data.price),
        accessibility: mapAccessibilityScoreToRating(
          response.data.accessibility
        ),
      };
      res.send(activityData);
    },
    (error) => {
      console.log(error);
      res.status(400).json(`ERROR: ${error.code}`);
    }
  );
});

app.post("/user", async (req, res) => {
  db.read();

  const { name, accessibility, price } = req.body;
  const user = {
    name: name,
    accessibility: capitalizeFirstLetter(accessibility),
    price: capitalizeFirstLetter(price),
  };

  if (!checkUserProfile(user)) {
    res.status(400).json("ERROR: User Profile invalid");
    return;
  }
  db.data.users.push(user);

  db.write();

  res.json(`Successfully added user: ${db.data.name}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port || port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
