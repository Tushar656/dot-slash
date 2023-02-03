const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config();
const Port = process.env.PORT || 8000;
app.use(express.json);

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connection Successful"))
.catch((err) => console.log("Mongodb not connected" + err));


const UserRoute = require("./Routes/User")
app.use('/api/user', UserRoute)



app.listen(Port, () => {
    console.log("Server is run at port " + Port);
})


























// Tushar-dot
// Tushar1234