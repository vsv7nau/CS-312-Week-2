const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req , res)
{
    var value1 = Number(req.body.n1);
    var value2 = Number(req.body.n2);

    var sum = value1 + value2;

    res.send("The sum of the two values is " + sum);
});

app.get("/bmicalculator", function(req, res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res)
{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("The BMI is " + bmi);

});

app.listen(3000, function()
{
    console.log("Server is running on port 3000");
});