import express, { Request, Response, Express } from "express";
import path from "path";
import fs from "fs"

const app: Express = express();
const port = 8080;

// async function createSiteConf(domain: string): Promise<void> {
// 	throw new Error("not yet implemented")
// }


function initiateSiteFiles(domain: string) {
	let rootPath: string = path.resolve(__dirname, "..");
	rootPath= path.resolve(rootPath, "..");
	const publicDir: string = path.join(rootPath, "www", domain, "public_html")
	console.log(publicDir)
	const logDir: string = path.join(rootPath, "www", domain, "logs")
	console.log(logDir)

	fs.mkdir(publicDir, { recursive: true }, (err) => {
		if (err) {
			throw err;
		}
	});

	fs.mkdir(logDir, { recursive: true }, (err) => {
		if (err) {
			throw err;
		}
	});


	function callback(err: NodeJS.ErrnoException | null): void {
		if (err) throw err;
		console.log('source.txt was copied to destination.txt');
	}

	// destination.txt will be created or overwritten by default.
	fs.copyFile(`${rootPath}/index.html`, `${publicDir}/index.html`, callback);
}

function a2ensite(filePath: string): void {
	throw new Error("not yet implemented")
}

app.get("/", (req: Request, res: Response) => {
	res.send("Hello world");
});

app.get("/create/:domain", (req: Request<{ domain: string }>, res: Response) => {
	const domain: string = req.params.domain;
	initiateSiteFiles(domain)
})

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
