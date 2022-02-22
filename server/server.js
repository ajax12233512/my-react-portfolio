const express = require('express');
const app = express();

const mail = require('./email/email');
mail()

const port = process.env.PORT || 3001;



app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})