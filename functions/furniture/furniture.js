const fetch = require("node-fetch");
console.log("netlify function test");
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!",
  });
};
