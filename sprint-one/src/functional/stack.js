var makeStack = function(){
  var someInstance = {};
  //var highestKey = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function(){
    //highestKey--;
    var key = Object.keys(storage).length-1;
    var toReturn = storage[key];
    delete storage[key];
    return toReturn;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};