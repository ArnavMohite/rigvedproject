const mongoose = require('mongoose');

const URI ="mongodb+srv://arnav:connect5374@cluster0.itqlz.mongodb.net/ResumeEntity?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;

