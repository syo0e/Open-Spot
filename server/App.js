const { swaggerUi, swaggerSpec } = require("./swaggerDoc");
const express = require("express");
const cors = require("cors");
const markerRouter = require("./routes/Markers");

const app = express();
const port = 80;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);

app.get("/", (_, res) => res.send("Hello world"));
app.use("/markers", markersRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
