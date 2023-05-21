import express from 'express'
import bodyParser from 'body-parser';
const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})
