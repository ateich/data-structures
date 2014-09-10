var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.firstInLine = 1;
  queue.itemsInLine = {};
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
	this.itemsInLine[Object.keys(this.itemsInLine).length + this.firstInLine] = value;
};

queueMethods.dequeue = function(){
	var toReturn = this.itemsInLine[this.firstInLine];
	delete this.itemsInLine[this.firstInLine];
	this.firstInLine++;
	return toReturn;
};

queueMethods.size = function(){
	return Object.keys(this.itemsInLine).length;
};

var newQueue = makeQueue();



