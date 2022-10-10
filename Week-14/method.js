const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'pesto_portfolio'
});

con.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});



let year=new Date().getFullYear();
let month=new Date().getMonth(); 

const getUsers=(cb,res)=>{  
  con.query("SELECT * FROM users", function (err, result) {
    if (err) throw err;  
    cb(JSON.stringify(result),res);
  }); 
}

const getUser=async({email,pass},cb,res)=>{
  let query="SELECT * FROM users where email='"
            +email+"' and pass='"+pass+"'";
            
  con.query(query, function (err, result) {
    if (err) throw err;    
    cb(JSON.stringify(result),res);
  });  
}

const addTransaction=async({dated,cid,asset_type,amount,amount_type},cb,res)=>{
    let query="INSERT INTO transactions(dated,cid,asset_type,amount,amount_type) VALUES ('"+dated+"', '"+cid+"', '"+asset_type+"', '"+amount+"','"+amount_type+"')";
    
    con.query(query, function (err, result) {
      if (err) throw err;  
      console.log(result);
      console.log("Transaction added successfully...");
      res.send("Transaction added successfully...");
    });
}

const getTransactions=async(id,cb,res)=>{
  let query="SELECT cid, IF(amount_type=1,'Income','Expense') as 'Transaction Type',"
           +"sum(amount) as 'Total Transaction' FROM transactions where cid='"+id+"' group by amount_type";
  
  con.query(query, function (err, result) {
    if (err) throw err;  
    cb(JSON.stringify(result),res);    
  });
}

const getAllTransactions=async({cid,fromMonth,fromYear,toMonth,toYear},cb,res)=>{
  let query="SELECT cid, FORMAT (dated, 'MMM dd yyyy') as date,IF(amount_type=1,'Credit','Debit') as 'Type',"
           +"amount as 'Amount' FROM transactions where cid='"+cid
           +"' and (MONTH(dated) between '"+fromMonth+"' and '"+toMonth+"' ) and "
           +"  (YEAR(dated) between '"+fromYear+"' and '"+toYear+"' )"
           +" order by dated";
  console.log(query);

  con.query(query, function (err, result) {
    if (err) throw err;  
    cb(JSON.stringify(result),res);    
  });
}

const getExpenses=async({cid,fromMonth,fromYear,toMonth,toYear},cb,res)=>{
  let query="SELECT cid, FORMAT (dated, 'MMM dd yyyy') as date,IF(amount_type=1,'Credit','Debit') as 'Type',"
           +"amount as 'Amount' FROM transactions where cid='"+cid
           +"' and amount_type = '2'"
           +" and (MONTH(dated) between '"+fromMonth+"' and '"+toMonth+"' ) and "
           +"  (YEAR(dated) between '"+fromYear+"' and '"+toYear+"' )"
           +" order by dated";
  console.log(query);

  con.query(query, function (err, result) {
    if (err) throw err;  
    cb(JSON.stringify(result),res);    
  });
}

const updateUser=({id,fname,lname,email,pass},cb,res)=>{

  //Validations
  if(!id) {
      console.log("No User Id provided!");
      res.send("No User Id provided!")
      return;
  }
  if(!fname && !lname && !email && !pass) {
      console.log("No Updation required");
      res.send("No Updation required")
      return;
  }
  
  const updateCols = [];
  if(fname) {
      updateCols.push(`fname='${fname}'`)
  }
  if(lname) {
      updateCols.push(`lname='${lname}'`)
  }
  if(email) {
      updateCols.push(`email='${email}'`)
  }
  if(pass) {
      updateCols.push(`password='${pass}'`)
  }
  
  const query = `UPDATE users SET ${updateCols.join(',')} where cid=${id}`

  console.log(query)
  con.query(query, function (err, result) {
    if (err) {
      console.log("An error occurred."+err);
    } else {
        console.log(result);
        res.send('Updation Complete');
    }
  });
}

const updateTransaction=({id,dated,asset_type,amount,amount_type},cb,res)=>{

  //Validations
  if(!id) {
      console.log("No User Id provided!");
      res.send("No User Id provided!")
      return;
  }
  if(!dated && !asset_type && !amount && !amount_type) {
      console.log("No Updation required");
      res.send("No Updation required")
      return;
  }
  
  const updateCols = [];
  if(dated) {
      updateCols.push(`dated='${dated}'`)
  }
  if(asset_type) {
      updateCols.push(`asset_type='${asset_type}'`)
  }
  if(amount) {
      updateCols.push(`amount='${amount}'`)
  }
  if(amount_type) {
      updateCols.push(`amount_typeword='${amount_type}'`)
  }
  
  const query = `UPDATE users SET ${updateCols.join(',')} where id=${id}`;

  console.log(query);
  con.query(query, function (err, result) {
    if (err) {
      console.log("An error occurred."+err);
    } else {
        console.log(result);
        res.send('Updation Complete');
    }
  });
}

const getInvoices=async(cb,res)=>{
  let query="SELECT * FROM invoices";
            
  con.query(query, function (err, result) {
    if (err) throw err;    
    cb(JSON.stringify(result),res);
  });  
}

const getInvoice=async({tid},cb,res)=>{
  let query="SELECT * FROM invoices where tid= '"+tid+"'";
            
  con.query(query, function (err, result) {
    if (err) throw err;    
    cb(JSON.stringify(result),res);
  });  
}

const callback=(result,res)=>{
  console.log(result);
  res.send(result);
}

module.exports={
    getUsers,
    getUser,
    getTransactions,
    getAllTransactions,
    getExpenses,
    getInvoices,
    getInvoice,
    addTransaction,
    updateTransaction,
    updateUser,
    callback
}