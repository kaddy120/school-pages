import { exec } from 'node:child_process';

exec('sudo touch  /etc/apache2/sites-available/test.com.conf', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
