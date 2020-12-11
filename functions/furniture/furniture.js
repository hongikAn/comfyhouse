const contentful = require("contentful");
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const deliveryId = process.env.CONTENTFUL_DELIVERY_API;

exports.handler = async function (event, context) {
  try {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: spaceId,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: deliveryId,
    });
    let response = await client.getEntries({
      content_type: "comfyHouseProduct",
    });

    const data = response.items;

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log("invocation error:", err); // output to netlify function log
    return {
      statusCode: 500,
      body: err.message, // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
