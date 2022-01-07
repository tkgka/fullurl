const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == "production" ? ".env" : ".env"
  ),
});
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);