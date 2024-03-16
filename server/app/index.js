const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port=4000;
const bodyParser = require('body-parser');
const staffRouter=require('./router/staff');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/staff',staffRouter);
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại cổng ${port}`);
});
