var express = require('express');
var app = express();
const port = 4000

app.use(express.static('public'))
app.get('/download', function (req, res) {
    res.download('public/dummy.pdf');
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
