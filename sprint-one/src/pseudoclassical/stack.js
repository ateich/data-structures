var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = {};
};

Stack.prototype.push = function(val){
	this.items[this.size()] = val;
};

Stack.prototype.pop = function(){
	var key = this.size()-1;
	var temp = this.items[key];
	delete this.items[key];
	return temp;
};

Stack.prototype.size = function(){
	return Object.keys(this.items).length;
};


