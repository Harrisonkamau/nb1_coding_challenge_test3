//this module defines our application

var myApp = angular.module('myApp',[]);

myApp.controller('studentList', function($scope) {

	$scope.students = [
	    {name: "Mike", age: 12,image: "http://placehold.it/150x150"},
	    {name: "Joan", age: 25,image: "http://placehold.it/150x150"},
	    {name: "Princeton", age: 41,image: "http://placehold.it/150x150"},
	    {name: "Billy", age: 9,image: "http://placehold.it/150x150"},
	    {name: "Angela", age: 32,image: "http://placehold.it/150x150"},
	    {name: "Max", age: 23,image: "http://placehold.it/150x150"},
	    {name: "Michelle", age: 70,image: "http://placehold.it/150x150"},
	    {name: "Kate", age: 21,image: "http://placehold.it/150x150"}
	    
	    ];
});
 
