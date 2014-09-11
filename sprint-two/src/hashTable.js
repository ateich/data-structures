var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log("hash: " + i + "VALUE: " + v);

  //if that key already exists at that index path
  //check around it +1 each time
  //forloop (keepchecking for empty spot until the limit)
  this._storage[i] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = null;
};

//take hash as param
//check if storage[hash] contains key
//if YES
//  return hash
//if NO
//  check hash+1 and repeat until found
//  return index

HashTable.prototype._collisionResolution = function(k, v, isInsert){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for(var j=0; j<this._limit-i; j++){
    if(!this._storage[i+j]){
      this._storage[i+j] = v;
      return true;
    }
  }

  //Double size of array and call this method again

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
