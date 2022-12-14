const express = require("express");
var fs = require('fs');
var http = require('http');
var https = require('https');
const cors = require("cors");
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
var nodemailer = require('nodemailer');
const app = express();

dotenv.config();

var privateKey = fs.readFileSync('sslcert/levinagift.key');
var certificate = fs.readFileSync('sslcert/levinagift.crt');
var credentials = {key: privateKey, cert: certificate};

const { initializeApp } = require('firebase/app');
const { doc, getDoc, addDoc, setDoc } = require("firebase/firestore");
const { getFirestore, collection, getDocs, getDocFromCache } = require ('firebase/firestore');

const port = parseInt(process.env.PORT || 5000);

app.use(express());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_RUL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURMENT_ID
};

const firebaseConn = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConn);

app.post("/checkorder", async(req, res) => {
    console.log("[checking order] : " + req.body.order);
    res.setHeader('Content-Type', 'application/json');
    try {
        const docRef = doc(db, "Amazon Order ID's", req.body.order);
        const orderDoc = await getDoc(docRef);
        if (orderDoc.exists()) {
            res.sendStatus(200);
        } else {
            return res.status(400).send({ message: "No such order" });
        }
    }
    catch (e) {
        return res.status(400).send({ message: e.message });
    }
});

app.get("/submissions", async(req, res) => {
  console.log("[loading submissions]");
  try {
    const docRef = await getDocs(collection(db, "submissions"));
    let result = [];
    docRef.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      result.push(doc.data());
    });
    res.json(result);
    // return result;
  }
  catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

app.get("/suvae", async(req, res) => {
  // console.log("[loading suvae status]");
  try {
    const docRef = doc(db, "levinagift-setting", "suvae");
    const docData = await getDoc(docRef);
    const result = docData.data();
    res.json(result);
    // res.sendStatus(200);
  }
  catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

app.post("/storeform", async(req, res) => {
    console.log('[received a submission] : ');
    const userInput = req.body.input;
    if (userInput.order_id == undefined)
      return res.status(400).send({ message: 'Wrong submission call' });
    // const submissionCol = collection(db, "submissions");
    try {
      // const docRef = await addDoc(submissionCol, userInput);
      userInput.date = getDateStr();
    //   console.log(userInput);
      await setDoc(doc(db, "submissions", userInput.order_id), userInput);
    }
    catch(e) {
      console.log(e);
      return res.status(400).send({ message: e.message });
    }
    res.sendStatus(200);
});

app.post("/suvae", async(req, res) => {
  console.log("[setting suvae status]");
  try {
    const docRef = doc(db, "levinagift-setting", "suvae");
    const docData = await getDoc(docRef);
    const result = docData.data();
    const input = req.body;
    Object.keys(input).forEach((key) => {
      if (!isNaN(result[key]))
        result[key] = input[key];
    });
    await setDoc(docRef, result);
    res.sendStatus(200);
  }
  catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

app.get("/sendmail", async(req,res) => {
  console.log("receving mail");
  var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  });
  var mailOptions = {
    from: 'mitchellcaleb00@gmail.com',
    to: 'hello.dennis0102@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      return res.sendStatus(200);
    }
    return res.status(400).send({ message: "Send email is failed" });
  });
});
// var httpsServer = https.createServer(credentials, app);
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  try {
      // const ordersCol = collection(db, "Amazon Order ID's");
      // const orderDocs = await getDocs(ordersCol);
      // orderDocs.forEach((doc) => {
      //     console.log(doc.id, " => ", doc.data());
      // });

      
  }
  catch (e) {
      console.log(e);
  }
});

const getDateStr = () => {
    const date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}