const express = require('express');

const router = express.Router();

// const Post = require('../models/posts')

const mongoose = require('mongoose');

//routes
const superstore = mongoose.model('superstores',{

    "Row_ID" : String,
    "Order_ID" : String,
    "Order_Date" : String,
    "Ship_Date" : String,
    "Ship_Mode" : String,
    "Customer_ID" : String,
    "Customer_Name" : String,
    "Segment" : String,
    "Postal_Code" : String,
    "City" : String,
    "State" : String,
    "Country" : String,
    "Region" : String,
    "Market" : String,
    "Product_ID" : String,
    "Category" : String,
    "Sub-Category" : String,
    "Product_Name" : String,
    "Sales" : String,
    "Quantity" : String,
    "Discount" : String,
    "Profit" : String,
    "Shipping_Cost" : String,
    "Order_Priority" : String,
})

 var datanoc;
 var totalsales;
//gets back all the posts 

router.get('/',async(req,res)=>{
    superstore.find({}, function(err, result) {
 // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log(result)
        datanoc = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})


router.get('/dsr',async(req,res)=>{
    // var x = superstore.count({"Customer_Name":{$type:2}})
    superstore.aggregate([{$group : {_id : null, sales_price : {$sum : "$Sales"}}}], function(err, result) {
        // superstores2.aggregate([{$group : {_id : null, sales_price : {$sum : "$Sales"}}}])
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('display sales revenue')
        totalsales = result[0].sales_price
        console.log(result[0].sales_price*datanoc)
        // console.log(x)
        data = result
        // console.log(data)
        res.json(result[0].sales_price*datanoc); // return all reviews in JSON format
    });
})

router.get('/atv',async(req,res)=>{
    // var x = superstore.count({"Customer_Name":{$type:2}})
    superstore.aggregate([{$group : {_id : null, sales_price : {$sum : "$Sales"}}}], function(err, result) {
        // superstores2.aggregate([{$group : {_id : null, sales_price : {$sum : "$Sales"}}}])
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('atv')
        console.log(Math.ceil(result[0].sales_price/datanoc))
        data = result
        // console.log(data)
        res.json(Math.ceil(result[0].sales_price/datanoc)); // return all reviews in JSON format
    });
})


router.get('/noc',async(req,res)=>{
    superstore.count({"Customer_Name":{$type:2}}, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log(result)
        datanoc = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/averagesales',async(req,res)=>{
    superstore.aggregate([{$group : {_id : null, totalquantity : {$sum : "$Quantity"}}}], function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('averagesales')
        console.log(totalsales/result[0].totalquantity)
        // console.log(data)]
        res.json(Math.ceil(totalsales/result[0].totalquantity)); // return all reviews in JSON format
    });
})

router.get('/consumer_tech',async(req,res)=>{
    superstore.count({ Segment: "Consumer",Category: "Technology" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('consumertech')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/consumer_furn',async(req,res)=>{
    superstore.count({ Segment: "Consumer",Category: "Furniture" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('consumerfurn')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/consumer_off',async(req,res)=>{
    superstore.count({ Segment: "Consumer",Category: "Office Supplies" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('consumeroff')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/corporate_tech',async(req,res)=>{
    superstore.count({ Segment: "Corporate",Category: "Technology" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('corporatetech')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/corporate_furn',async(req,res)=>{
    superstore.count({ Segment: "Corporate",Category: "Furniture" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('corporatefurn')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/corporate_off',async(req,res)=>{
    superstore.count({ Segment: "Corporate",Category: "Office Supplies" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('corporate off')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/homeoff_tech',async(req,res)=>{
    superstore.count({ Segment: "Home Office",Category: "Technology" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('homeofftech')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/homeoff_furn',async(req,res)=>{
    superstore.count({ Segment: "Home Office",Category: "Furniture" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('homeofffurn')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})

router.get('/homeoff_off',async(req,res)=>{
    superstore.count({ Segment: "Home Office",Category: "Office Supplies" }, function(err, result) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log('homeoff_off')
        console.log(result)
        data = result
        // console.log(data)
        res.json(result); // return all reviews in JSON format
    });
})
// db.superstores.find().sort({"Sales":-1}).limit(5)
router.get('/top5sales',async(req,res)=>{
    var options = {
        "sort": { "Sales": -1 },
      };

    query= superstore.find().sort({"Sales":-1}).limit(5)
    query.exec(function(err, result) {
        if (err)
            res.send(err)
        console.log('top5sales')
        // console.log(result)
        data = (result)
        console.log(data)
        res.json(result); 
    }); 
})

router.get('/orderspercountry',async(req,res)=>{
    // db.superstores.aggregate([{$group : {_id : "$Country", totalquantity : {$sum : "$Quantity"}}}])
    query = superstore.aggregate([{$group : {_id : "$Country", value : {$sum : "$Quantity"}}}])
    query.exec(function(err, result) {
        if (err)
            res.send(err)
        console.log('distinct countries ')
        data = (result)
        console.log(data)
        res.json(result); 
    });
})

module.exports = router;
