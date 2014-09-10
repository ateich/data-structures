var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.items = {};
  return stack;
};

var stackMethods = {};

stackMethods.push = function(val){
	this.items[this.size()] = val;
};

stackMethods.pop = function(){
	var key = this.size()-1;
	var temp = this.items[key];
	delete this.items[key];
	return temp;
};

stackMethods.size = function(){
	return Object.keys(this.items).length;
};

