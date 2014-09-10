var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.items = {};
  queue.firstInLine = 1;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.items[Object.keys(this.items).length+this.firstInLine] = value;
};

queueMethods.dequeue = function(){
	if(Object.keys(this.items).length > 0){
		var temp = this.items[this.firstInLine];
		delete this.items[this.firstInLine];
		this.firstInLine++;
		return temp;
	} else {
		return null;
	}
};

queueMethods.size = function(){
	return Object.keys(this.items).length;
};


