/**
 * Created by Touil on 03/03/2017.
 */

var express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();

//middleware
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] ==='https'){
    res.redirect('http://'+ req.hostname + req.url);
  }else {
    next();
  }
})

app.use(express.static('public'));

app.listen(PORT,function(){
    console.log('server is running on port ' + PORT);
});
