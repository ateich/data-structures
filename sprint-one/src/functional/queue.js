var makeQueue = function(){
  var someInstance = {};
  var firstInLine = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var newKey = firstInLine + Object.keys(storage).length;
    storage[newKey] = value;
  };

  someInstance.dequeue = function(){
    var toReturn = storage[firstInLine];
    delete storage[firstInLine];
    firstInLine++;
    return toReturn;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
