//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

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-q0wp4xhdPaLq0Ipgz91DQkQY",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

app.post("/", async (req, res) => {
  const { message, currentModel } = req.body;
  console.log(message, "message")
  const response = await openai.createCompletion({
    model: `${currentModel}`,
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log(currentModel, "currentModel");
  res.json({
    message: response.data.choices[0].text,
  });
});

app.get("/models", async (req, res) => {
  const response = await openai.listModels();
  console.log(response.data)
  res.json({
    models: response.data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
