var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var o = {};
  o.val = v;
  o.key = k;
  if(Array.isArray(this._storage[i])){
    this._storage[i].push(o);
  } else {
    this._storage[i] = [o];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j] && this._storage[i][j].key === k){
      return this._storage[i][j].val;
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j].key === k){
      this._storage[i][j] = null;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

