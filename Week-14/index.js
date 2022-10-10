const express= require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');
const { json } = require('express');

const {getUsers} = require('./methods');
const {getUser} = require('./methods');
const {getTransactions} = require('./methods');
const {getAllTransactions} = require('./methods');
const {addTransaction} = require('./methods');
const {getExpenses} = require('./methods');
const {getInvoices} = require('./methods');
const {getInvoice} = require('./methods');
const {updateUser} = require('./methods');
const {updateTransaction} = require('./methods');
const {callback} = require('./methods');

const corsOptions = {
  origin:'*',
  credentials:true,
  optionSuccessStatus:200,
  contentType:'application/json',
}
app.use(cors(corsOptions));



app.get("/getUsers", async (req, res) => {    
  getUsers(callback,res);
});

app.get("/signin", async (req, res) => {    
  await getUser(req.query,callback,res);  
});

app.get("/signup", function(req, res) {
  
  const fname = req.query.fname;
  const lname = req.query.lname?req.query.lname:'';
  const email = req.query.email;
  const pass  = req.query.pass;
  
  let query = "INSERT INTO users(fname,lname,email,pass) VALUES ('"+fname+"', '"+lname+"', '"+email+"', '"+pass+"')";

  con.query(query, function (err, result) {
  if (err) {
      console.log("An error occurred."+err);
  } else {
      console.log(result);
      console.log("Signup Successful, Login to continue...");
      res.send("Signup Successful, Login to continue...");
  }
});
});

app.get("/updateUser", async (req, res) => {    
  await updateUser(req.query,callback,res);  
});

app.get("/uploadInvoice", function(req, res) {
  
  const imagePath ="C:"+'\\\\' +"images" + '\\\\';
  const tid = req.query.tid;
  const image = req.query.image?imagePath+req.query.image:'';
  
  let query = "INSERT INTO invoices(tid,image) VALUES ('"+tid+"', '"+image+"')";

  con.query(query, function (err, result) {
  if (err) {
      console.log("An error occurred."+err);
  } else {
      console.log(result);
      console.log("Invoice added...");
      res.send("Invoice added...");
  }
});
});

app.get("/addTransaction",async(req,res)=>{
  await addTransaction(req.query,callback,res);
});

app.get("/transactionSummary", async (req, res) => {    
  getTransactions(req.query.id,callback,res);
});

app.get("/transactionDetails", async (req, res) => {  
   
  let queryObj={
    cid         : req.query.id,
    fromMonth   : req.query.fromMonth ? req.query.fromMonth : month,
    toMonth     : req.query.toMonth ? req.query.toMonth : ( req.query.fromMonth ? req.query.fromMonth : month ),
    fromYear    : req.query.fromYear ? req.query.fromYear : year,    
    toYear      : req.query.toYear ? req.query.toYear : ( req.query.fromYear ? req.query.fromYear : year ),
  };
  getAllTransactions(queryObj,callback,res);
});

app.get("/updateTransaction",async(req,res)=>{
  await updateTransaction(req.query,callback,res);
});

app.get("/expenses", async (req, res) => {    
  await getExpenses(req.query,callback,res);  
});

app.get("/invoices", async(req,res)=>{
  await getInvoices(callback,res);
});

app.get("/invoice", async(req,res)=>{
  await getInvoice(req.query,callback,res);
});


app.listen(3001, () => {
    console.log("Server running on port 3001 ");
});