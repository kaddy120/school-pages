"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const fs_1 = __importDefault(require("fs"));
function createSiteConf(domain) {
    const confContent = `<VirtualHost *:80>
     ServerAdmin webmaster@${domain}
     ServerName ${domain}
     ServerAlias www.${domain}
     DocumentRoot /home/kaddy120/workspace/pages/www/${domain}/public_html/
     ErrorLog /home/kaddy120/workspace/pages/www/${domain}/logs/error.log
     CustomLog /var/www/${domain}/logs/access.log combined
</VirtualHost>\n\r`;
    const data = new Uint8Array(buffer_1.Buffer.from(confContent));
    fs_1.default.writeFile(`${domain}.conf`, data, (err) => {
        if (err)
            throw err;
        console.log("file is created");
        // run the script here
    });
}
exports.default = createSiteConf;
//# sourceMappingURL=vhost-conf.js.map