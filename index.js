const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(bodyParser.json());

// Sử dụng route cho CRUD
app.use('/api', userRoutes);

// Kết nối tới MongoDB Atlas
const mongoURI = 'mongodb+srv://tuhocquanduong:6fxMhnCIV7VsG5sl@cluster0.pnrsz.mongodb.net/';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Kết nối thành công tới MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Lỗi kết nối tới MongoDB Atlas', err);
    });

// Lắng nghe trên cổng
app.listen(PORT, () => {
    console.log(`Server chạy trên cổng ${PORT}`);
});
