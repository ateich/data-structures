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

  if(this._usedIndexes === this._limit * 3 / 4){
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
  }
  return null;
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

  if(this._usedIndexes * 2 < this._limit){
    this.changeHashSize(false);
  }
};

HashTable.prototype.changeHashSize = function(isDoubling){
  isDoubling ? this._limit *= 2 : this._limit /= 2;

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
