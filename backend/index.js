const express = require('express');
// conStr = "mongodb+srv://nummadtech:zfjektln@cluster0.cyw9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// conStr = "mongodb://localhost:27017";
const mongoose = require('mongoose');
// const cors = require('cors');
const bcrypt = require('bcrypt'); 

const app = express();
// app.use(cors());
app.use(express.json());
// mongoose.connect(conStr).then(() => console.log("DB")).catch(e => console.log(e));

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const userModel = mongoose.model('user', userSchema);

app.get('/', (req, res)=>{
    res.send('Hi');
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await userModel.findOne({ email });
        if (userData) {
            const matchPassword = bcrypt.compare(password, userData.password);
            const isFound = (matchPassword);
            if (isFound) {
                res.send(true);
            } else {
                res.send(false);
            }
        } else {
            res.send(false);
        }
    } catch (e) {
        console.log(e);
    }
})

app.listen(8000, () => {
    console.log('server started');
});
