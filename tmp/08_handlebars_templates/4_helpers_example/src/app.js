import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// Set up Handlebars with custom helpers
app.engine(
  "handlebars",
  handlebars.engine({
    helpers: {
      shout: text => text.toUpperCase(),
      formatDate: date => new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(date)),
    },
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Route rendering a view using helpers
app.get("/", (req, res) => {
  const message = "hello world";
  const today = new Date();
  res.render("index", { message, today });
});

export default app;
