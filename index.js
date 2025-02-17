const express = require('express');
const app = express();

// Existing routes...

// New route for hi-hongqiao
app.get('/hi-hongqiao', (req, res) => {
    res.send('你好，虹桥！');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
