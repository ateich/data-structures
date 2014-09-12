var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._usedIndexes = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = [k, v];
  var getStorage = this._storage.get(i);
  if(!Array.isArray(getStorage)){
    this._storage.set(i, [obj]);

  } else {
    getStorage.push(obj);
    console.log("There is a collision");
    this._storage.set(i, getStorage);
  }
  this._usedIndexes++;
  //collision detection
  //  call retrieve
  //  if !returns array
  //    add emtpy array
  //
  //  push {k:v} to array

  //Check for doubling

  console.log("Used Index Count: " + this._usedIndexes);
  if(this._usedIndexes === this._limit * 3 / 4){
    debugger;
    this.changeHashSize(true);
  }
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
          if(values.length === 0){
            this._usedIndexes--;
          }
        }
      }
    }
  });
  //each with callback
  //callback = function that checks if item's index is i
  //callback params (value, index, array)
  //if found item to remove, remove it from callback array
  if(this._usedIndexes * 2 < this._limit){
    this.changeHashSize(false);
  }
};

HashTable.prototype.changeHashSize = function(isDoubling){
  console.log("is doubling/halfing " + isDoubling);
  console.log("limit before change: " + this._limit);
  if(isDoubling){
    this._limit *= 2;
  } else {
    this._limit /= 2;
  }
  console.log("limit after change: " + this._limit);
  var newHash = makeLimitedArray(this._limit);
  var useThis = this;
  var tempStorage = this._storage;

  this._usedIndexes = 0;
  this._storage = newHash;
  tempStorage.each(function(values, key, array){
    if(values){
      for(var j = 0; j < values.length; j++){
        useThis.insert(values[j][0], values[j][1]);
      }
    }
  });
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

