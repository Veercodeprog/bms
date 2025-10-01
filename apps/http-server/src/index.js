"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
///
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
  res.send("Hi There");
});
app.get("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client_1.client.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json({
    message: "Signup successful",
    id: user.id,
  });
});
app.get("/", (req, res) => {
  res.send("Hi There");
});
app.listen(3002);
