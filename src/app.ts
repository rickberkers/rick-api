import express from 'express';
import router from "./router";
import {config as dotEnvConfig} from 'dotenv'

dotEnvConfig();

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))