// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
fastify.register(require("fastify-cors"), {
  origin: true,
});
const fs = require("fs");

// Declare a route
fastify.get("/", async () => {
  const jsonData = JSON.parse(fs.readFileSync("./dest/data/news.json"));
  return jsonData;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
