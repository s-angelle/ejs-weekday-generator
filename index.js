// const today = new Date();
// const weekday = today.getDay();
// let isWeekend = 'the weekend';
// let isWeekday = ' a weekday';

// if(weekday === 0 || weekday === 6) {

//     console.log(`Today is ${isWeekend}!`); 
//     console.log(`${weekday}`);

// } else {

//     console.log(`Today is${isWeekday}! `);
//     console.log(`${weekday}`);
// }

import express from 'express';
 
const app = express();
const port = 3000;


// Middleware 
app.set("view engine", "ejs");


// Request Handlers
app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv =  "it's time to work hard!";

    if (day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to have some fun!"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})