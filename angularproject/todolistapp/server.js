var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('todolist', ['todolist','tasks']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());//server can parse the body of the input resive

app.get('/todolist',function(req, res){
	console.log("I recived get request")

	db.todolist.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});

});



app.get('/tasks',function(req, res){
	console.log("I recived from task request")

	db.tasks.find(function (err,docs){
		console.log(docs);
		res.json(docs);
	});

});

//inserting data
app.post('/todolist', function(req, res){
	console.log(req.body);

	//inserting data in to db and send the new data into the controller.
	db.todolist.insert(req.body, function(err, doc) {
    res.json(doc);
  })

});



app.post('/tasks', function(req, res){
	console.log(req.body);

	//inserting data in to db and send the new data into the controller.
	db.tasks.insert(req.body, function(err, doc) {
    res.json(doc);
  })

});


//delete the data
app.delete('/todolist/:id', function(req, res){
	var id=req.params.id;
	console.log(id); 
	db.todolist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc); 
	})
});

//delete tasks
app.delete('/tasks/:id', function(req, res){
	var id=req.params.id;
	console.log(id); 
	db.tasks.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc); 
	})
});

//Edit the data
app.get('/todolist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.todolist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//update the data.
app.put('/todolist/:id', function (req, res) {
	var id=req.params.id;
	console.log(req.body.name);
	db.todolist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update:{$set: {name: req.body.name, start: req.body.start, end: req.body.end}}, new:true}, function(err, doc){
			res.json(doc);
		});
});
app.listen(3000);
console.log("server running on port 3000");