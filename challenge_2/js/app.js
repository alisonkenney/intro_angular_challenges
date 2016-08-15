console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController(){
	this.full_name = "Alison Kenney";
	this.age = 26;
	this.city = "Fort Collins";
	this.state = "Colorado";
	this.shout = function(name){
	    return name.toUpperCase() + "!";
	  };
}

function ClassController(){
  this.class_name = "WDI";
  this.enrolled_students = ["Alison", "Greg", "Maddy", "Charlie", "Matt", "Luis", "Monica", "Jamie", "Holly", "Kacey", "Mark", "Abe", "Nick"];
  this.start_date = "6/13/2016";
  this.end_date = "9/02/2016";
  this.daysRemaining = function(){
    var months_left = Date.parse(this.end_date) - Date.now();
    var days_left = Math.floor( months_left/1000/24/60/60 );
    return days_left;
  };
}
