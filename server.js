const express = require("express");
const User = require("./models/user.js");
const Ticket = require("./models/ticket.js");
// const Record = require("./record");
const record = require("./record.js");
require("./models/connect.js");
const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("Bus Booking is running on port 4000");
});

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// app.put("/ticket1/", async (req, res) => {
//   try {
//     // const { seat } = req.body;
//     // const {id,busName,mobileNumber,ticketNo,seat,status} = req.body;
//     // // if(req.body.status == "open"){
//       const ticketNo1 = await Ticket.find(req.body);
//       res.status(200).json(ticketNo1);
//     // }
//       const ticketNo2 = await Ticket.updateMany({_id:req.params.id},{$set: req.body});
//       res.status(200).json(ticketNo2);

    
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


app.put("/ticket/:id", async (req, res) => {
  try {
    
      const ticketNo2 = await Ticket.findByIdAndUpdate({_id:req.params.id},{$set: req.body});
      res.status(200).json(ticketNo2);

      
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// app.put("/ticket11/:id", async (req, res) => {
//   try {
//     // const { seat } = req.body;
//     // const {id,busName,mobileNumber,ticketNo,seat,status} = req.body;
//     // // if(req.body.status == "open"){
//       const ticketNo2 = await Ticket.updateMany({_id:req.params.id},{$set: req.body});
//       res.status(200).json(ticketNo2);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



app.get("/ticket/close", async (req, res) => {
  try {
    const closeseat = await Ticket.find({status:req.body.status="close"})
    // if ( !status == "open") {
     
      res.status(200).json(closeseat);
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/ticket/open", async (req, res) => {
  try {
    console.log("req.body.status:::",req.body)
    let q= { status:"open" }
    console.log("q::",q)
    const openseat = await Ticket.find(q)
    // if ( !status == "open") {
     
      res.status(200).json(openseat);
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/ticket/record1',async(req,res)=>{
  // const { id, busName, mobileNumber,status,seat, ticketNo } = req.body;
    try{
      let records = [];
        for(let i=0;i<=40;i++){  
         records.push({...req.body,seat:i+1})
        }
        //  const ticket = await Ticket.insertMany(seat =req.body.seat = i + 1)
        const ticket = await Ticket.insertMany(records)
         res.status(200).json(ticket);
        
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// app.post("/ticket", async (req, res) => {
//   try {
//     const { id, busName, mobileNumber, ticketNo, seat } = req.body;
//     console.log("req.body", req.body);
//     if (seat < 41) {
//       console.log("seat");
//       const ticket = await Ticket.create(req.body);
//       res.status(200).json(ticket);
//     } else {
//       res.status(200).json("Not valid sit");
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });
// app.post('/update',async(req,res)=>{

//     try {

//         const {id,busName,seat=41,mobileNumber,ticketNo} = req.body;

//         // for(let i = 0;i<seat;i++){
//         //   if(!req.seat){
//         //     return res.status(201).json({ status: true, message: "not valid " });
//         //   }
//         // }

//       if(req.seat<seat){
//         return res.status(201).json({ status: true, message: "nooked" });

//       }
//       // let update = await Ticket.create({ _id: mongoose.Types.ObjectId(id) });
//        let update = await Ticket.create(req.body);
//     //   if (!update) {
//     //     return res.status(400).json({ status: false, message: "Enter Valid Guide Id " });
//     //   }
//       let data = {
//         busName: busName,
//         mobileNumber: mobileNumber,
//         ticketNo : ticketNo,
//         seat:seat,

//       };

//       let Update = await Ticket.findOneAndUpdate(
//         req.body,
//         { $set: data },
//         { new: true }
//       );
//         return res.status(201).json({ status: true, message: "Guide Updated " });
//       } catch (error) {
//         return res.status(500).json({ status: false, error: error.message });
//       }
// })




app.delete("/ticket/delete", async (req, res) => {
  try {

    const ticket = await Ticket.deleteMany(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/ticket/findbooking",async(req,res)=>{
  try{
    const findticket = await Ticket.find();
    res.status(200).json(findticket)
  }catch (error){
    console.log(error.message);
    res.status(500).json({message:error.message})
  }
})
app.get("/ticket3/:id",async(req,res)=>{
  try{
      const details = await Ticket.findOne({_id:req.params.id})
      res.status(200).json(details)
  }catch(error){
      console.log(error.message);
      res.status(500).json({message:error.message})
  }
})
// app.post("/ticket/record", async (req, res) => { 
//   const { id, busName, mobileNumber, ticketNo, seat } = req.body;
//   try {
//      for(let i = 0; i <= 40;i++){
//         seat = i + 1;
//       const ticket = await Ticket.insertMany(req.body);
//       res.status(200).json(ticket);
//      }

//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }

// });

// app.post("/ticket/rr",record.recordCreate);