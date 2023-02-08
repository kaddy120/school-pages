import express, { Request, Response, Express } from "express";
import path from "path";
import fs from "fs"
import createSiteConf from "./vhost-conf"

const app: Express = express();
const port = 8080;

// async function createSiteConf(domain: string): Promise<void> {
// 	throw new Error("not yet implemented")
// }


function initiateSiteFiles(domain: string) {
	let rootPath: string = path.resolve(__dirname, "..");
	rootPath = path.resolve(rootPath, "..");


	function callback(err: NodeJS.ErrnoException | null): void {
		if (err) throw err;
		console.log('source.txt was copied to destination.txt');
	}

	fs.mkdir(path.join(rootPath, "www", domain, "public_html")
		, { recursive: true }, (err) => {
			if (err) {
				throw err;
			}
			fs.copyFile(`${rootPath}/index.html`, `${path.join(rootPath, "www", domain, "public_html")}/index.html`, 
			callback);
		});

	fs.mkdir(path.join(rootPath, "www", domain, "logs"),
		{ recursive: true }, (err) => {
			if (err) {
				throw err;
			}
		});


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
	createSiteConf(domain)
	// to-do create a script to move the *.conf to /etc/apache/
})

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
