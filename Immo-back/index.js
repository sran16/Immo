import express from "express";
import cors from "cors";
import v1Router from "./routes/v1.js";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/v1", v1Router);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
