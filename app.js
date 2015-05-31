var express = require('express')
var port = process.env.PORT || 80
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('crab started on port ' + port)

// index page
app.get('/', function(req, res){
	res.render('index', {
		title: 'crab home'
	})
})