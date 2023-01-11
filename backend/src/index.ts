import express, {Request, Response, Express} from "express";
const app: Express = express();
const port: number = 8081;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
