const Ticket = require("./models/ticket.js");

// async function recordCreate() {
//    let seat = 40;
// const { busName, mobileNumber, ticketNo,status,seat } = req.body;

    // for(let i=0;i<=39;i++){
    //     seat = i + 1;
    
        // const documemt = {
        //                   busName : busName,
        //                   mobileNumber : mobileNumber,
        //                   ticketNo : ticketNo,
        //                   status : status,
        //                   seat : seat
        //   }
        // let agent = await Ticket.recordCreate(document);
        // return agent;
    // }
        // res.status(200).json(agent);
    
   
// }

// const recordCreate  = async(req,res) =>{
// try{

//     let records = [];
//     for(let i=0;i<=40;i++){
//         records.push({seat: i + 1})       
//     }
//     const ticket = await Ticket.insertMany(records)
//     return  res.status(200).json(ticket)
// }  catch (error){
//     console.log(error.message);
//     // return res.status(500).json({status : false,message: error.message})
    
// }
// }
// module.exports = recordCreate();