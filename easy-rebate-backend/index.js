const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');
const app = express();

const { initializeApp } = require('firebase/app');
const { doc, getDoc, addDoc, setDoc } = require("firebase/firestore");
const { getFirestore, collection, getDocs, getDocFromCache } = require ('firebase/firestore');

const port = parseInt(process.env.PORT || 5000);

app.use(express());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const firebaseConfig = {
    apiKey: "AIzaSyDub_7am1OiXSAPctcJpfUmcZEDlSjV-hc",
    authDomain: "newt-nutrition.firebaseapp.com",
    databaseURL: "https://newt-nutrition-default-rtdb.firebaseio.com",
    projectId: "newt-nutrition",
    storageBucket: "newt-nutrition.appspot.com",
    messagingSenderId: "1084163711012",
    appId: "1:1084163711012:web:62601e0b1e144aac7ff8b1",
    measurementId: "G-1L3G61SHBH"
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

app.post("/storeform", async(req, res) => {
    console.log('[received a submission] : ');
    const userInput = req.body.input;
    // const submissionCol = collection(db, "submissions");
    try {
      // const docRef = await addDoc(submissionCol, userInput);
      userInput.date = new Date();
    //   console.log(userInput);
      await setDoc(doc(db, "submissions", userInput.order_id), userInput);
    }
    catch(e) {
      console.log(e);
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
const server = app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    try {
        const ordersCol = collection(db, "Amazon Order ID's");
        // const orderDocs = await getDocs(ordersCol);
        // orderDocs.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        // });

        
    }
    catch (e) {
        console.log(e);
    }
});