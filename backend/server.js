const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, resp) =>{
    resp.send("Se consumio api or not!");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})