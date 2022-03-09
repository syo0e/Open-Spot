const { swaggerUi, swaggerSpec } = require("./SwaggerDoc");
const express = require("express");
const cors = require("cors");
const markersRouter = require("./Routes/Markers");
const usersRouter = require("./Routes/Users");
const authRouter = require("./Routes/Auth");

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
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
