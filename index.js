import express from 'express';
import axios from 'axios';

const app = express();
const PORT =  3000;
const URL = "https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=0.12&current=temperature_2m";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(URL);
        res.render("index.ejs", {
            temperature: result.data.current.temperature_2m
        });
    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})