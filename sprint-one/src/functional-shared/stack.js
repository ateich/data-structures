var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.items = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.items[Object.keys(this.items).length] = value;
};

stackMethods.pop = function(){
	var key = Object.keys(this.items).length-1;
	var temp = this.items[key];
	delete this.items[key];
	return temp;
};

stackMethods.size = function(){
	return Object.keys(this.items).length;
};

var newStack = makeStack();


