const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const scrapers = require('./Scraper');



const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/job', async (req, res) => {
    const jobdata = await scrapers.get();
    res.send(jobdata)
})
// app.post('/job', async (req, res) => {
//     console.log(req.body);
//     const jobdata = await scrapers.get();
//     const jobtitle = jobdata.res;
//     const jobcompany = jobdata.res2;
//     const joblocation = jobdata.res3;
//     for(let i=0;i<jobtitle.length;i++){
//         db.collection('Jobs').insertOne( { JobTitle: `${jobtitle[i]}`,JobCompany:`${jobcompany[i]}` ,JobLocation: `${joblocation[i]}` } )
//     }
//     res.send("hoooo");
// })

app.listen(port, async () =>{
    try {
        await db();
      } catch (err) {
        console.log(err);
      }
    
      console.log("listening on port 3000");
})