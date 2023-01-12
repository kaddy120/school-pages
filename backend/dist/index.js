"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 8080;
// async function createSiteConf(domain: string): Promise<void> {
// 	throw new Error("not yet implemented")
// }
function initiateSiteFiles(domain) {
    let rootPath = path_1.default.resolve(__dirname, "..");
    rootPath = path_1.default.resolve(rootPath, "..");
    const publicDir = path_1.default.join(rootPath, "www", domain, "public_html");
    console.log(publicDir);
    const logDir = path_1.default.join(rootPath, "www", domain, "logs");
    console.log(logDir);
    fs_1.default.mkdir(publicDir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
    fs_1.default.mkdir(logDir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
    function callback(err) {
        if (err)
            throw err;
        console.log('source.txt was copied to destination.txt');
    }
    // destination.txt will be created or overwritten by default.
    fs_1.default.copyFile(`${rootPath}/index.html`, `${publicDir}/index.html`, callback);
}
function a2ensite(filePath) {
    throw new Error("not yet implemented");
}
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/create/:domain", (req, res) => {
    const domain = req.params.domain;
    initiateSiteFiles(domain);
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map