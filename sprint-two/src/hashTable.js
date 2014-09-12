var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = [k, v];
  var getStorage = this._storage.get(i);
  if(!Array.isArray(getStorage)){
    this._storage.set(i, [obj]);
  } else {
    getStorage.push(obj);
    this._storage.set(i, getStorage);
  }

  //collision detection
  //  call retrieve
  //  if !returns array
  //    add emtpy array
  //
  //  push {k:v} to array

  //Check for doubling
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var getStorage = this._storage.get(i);
  if (getStorage){
    for(var j = 0; j < getStorage.length; j++){
      if(getStorage[j][0] === k) {
        return getStorage[j][1];
      }
    }
    return null;
  } else {
    return null;
  }
  // if storage get i is an object with multiple sub objects
  //  iterate through object keys to find k
  //  return obj[k];
  // else return it
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(values, key, array){
    if(key === i){
      for(var j = 0; j < values.length; j++){
        if(values[j][0] === k){
          //remove value out of array
          values.pop(j);
        }
      }
    }
  });
  //each with callback
  //callback = function that checks if item's index is i
  //callback params (value, index, array)
  //if found item to remove, remove it from callback array
};


//Storage Mutator
//params (isDoubling)
//if isDoubling
//  limit *=2
//else
//  limit /=2
//makeLimitedArray using limit
//use each to get value of each current index
//get key from hash:key container
//calculate new hash from key using new limit
//add value from old storage to new storage
//set _.storage to new storage


/*
 * Complexity: What is the time complexity of the above functions?
 */

