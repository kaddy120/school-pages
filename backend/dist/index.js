"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const vhost_conf_1 = __importDefault(require("./vhost-conf"));
const app = (0, express_1.default)();
const port = 8080;
// async function createSiteConf(domain: string): Promise<void> {
// 	throw new Error("not yet implemented")
// }
function initiateSiteFiles(domain) {
    let rootPath = path_1.default.resolve(__dirname, "..");
    rootPath = path_1.default.resolve(rootPath, "..");
    function callback(err) {
        if (err)
            throw err;
        console.log('source.txt was copied to destination.txt');
    }
    fs_1.default.mkdir(path_1.default.join(rootPath, "www", domain, "public_html"), { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        fs_1.default.copyFile(`${rootPath}/index.html`, `${path_1.default.join(rootPath, "www", domain, "public_html")}/index.html`, callback);
    });
    fs_1.default.mkdir(path_1.default.join(rootPath, "www", domain, "logs"), { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
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
    (0, vhost_conf_1.default)(domain);
    // to-do create a script to move the *.conf to /etc/apache/
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map