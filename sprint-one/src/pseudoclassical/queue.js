var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = {};
  this.firstInLine = 1;
};

Queue.prototype.enqueue = function(val){
	this.items[this.size()+this.firstInLine] = val;
};

Queue.prototype.dequeue = function(){
	var temp = this.items[this.firstInLine];
	delete this.items[this.firstInLine];
	this.firstInLine++;
	return temp;
};

Queue.prototype.size = function(){
	return Object.keys(this.items).length;
};


