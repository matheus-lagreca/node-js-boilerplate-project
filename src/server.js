import App from "./app";
import env from "../.env";


const hostname = env.HOSTNAME;
const port = env.PORT;

App.server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
