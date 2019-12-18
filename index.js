const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;


app.get("/", function(req, res) {
    
    res.send(`  Test<br />
                Your IP is <b>${req.ip}</b>`);
    res.end();
    
});

app.listen(PORT, err => {
     
    if(err){
        console.error(err);
    }else{
        console.log(`App listening on port ${PORT}`);
    }
    
});
