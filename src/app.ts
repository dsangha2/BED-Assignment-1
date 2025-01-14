import express, {Express} from "express";
import setupSwagger from "../config/swagger";

const app: Express = express();

setupSwagger(app);

/**
 * @openapi
 * /:
 *   get:
 *     description: Respond with "Hello, World!"
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app; 