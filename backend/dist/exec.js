"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = require("node:child_process");
(0, node_child_process_1.exec)('sudo touch  /etc/apache2/sites-available/test.com.conf', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
//# sourceMappingURL=exec.js.map