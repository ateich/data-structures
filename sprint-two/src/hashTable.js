var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //collision detection
  //  call retrieve
  //  if returns value
  //    we will have a collision
  //    if returns obj
  //      push to object new obj {key: v}
  //    else
  //      make obj {old_key:old_val, key:v}

  //Check for doubling
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if storage get i is an object with multiple sub objects
  //  iterate through object keys to find k
  //  return obj[k];
  // else return it
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
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

