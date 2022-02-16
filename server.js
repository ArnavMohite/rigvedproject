const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const router = require('./Api/User');
connectDB();
app.use(express.json({ extended: false }));

app.route('/Api/User')
            .get(router.read_user);
            

const Port = process.env.Port || 4000;

app.listen(Port, () => console.log('Server started'));

