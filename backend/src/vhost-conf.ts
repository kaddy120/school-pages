import { exec } from "node:child_process";
import {Buffer} from "buffer"
import fs from "fs"

export default function createSiteConf(domain: string) {
	const confContent = `<VirtualHost *:80>
     ServerAdmin webmaster@${domain}
     ServerName ${domain}
     ServerAlias www.${domain}
     DocumentRoot /home/kaddy120/workspace/pages/www/${domain}/public_html/
     ErrorLog /home/kaddy120/workspace/pages/www/${domain}/logs/error.log
     CustomLog /var/www/${domain}/logs/access.log combined
</VirtualHost>\n\r`

const data = new Uint8Array(Buffer.from(confContent));
	fs.writeFile(`${domain}.conf`, data, (err: NodeJS.ErrnoException | null) => {
		if (err) throw err
		console.log("file is created")
		// run the script here
	});
}
