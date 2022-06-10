import App from "./app";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' });

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;


App.server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
