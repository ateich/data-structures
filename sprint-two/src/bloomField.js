var MakeBloom = function(){
  this.bits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}

MakeBloom.prototype.add = function(value){
  //get result of 3 hash functions
  //turn this.bits[hash result] to 1
  var hash1 = this.hash1(value);
  var hash2 = this.hash2(value);
  var hash3 = this.hash3(value);

  this.bits[hash1] = this.bits[hash2] = this.bits[hash3] = 1;
  console.log(this.bits);

}

MakeBloom.prototype.query = function(value){
  //get result of 3 hash functions
  //iterate through results to see if any results are 0
  //if any are zero, immediately return false;
  //
  //else return maybe true;
  var hash1 = this.hash1(value);
  var hash2 = this.hash2(value);
  var hash3 = this.hash3(value);

  if (this.bits[hash1] === 0 || this.bits[hash2] === 0 || this.bits[hash3] === 0){
    return false;
  }
  return true;

};

MakeBloom.prototype.hash1 = function(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<4) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % this.bits.length;
};

MakeBloom.prototype.hash2 = function(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % this.bits.length;
};

MakeBloom.prototype.hash3 = function(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<6) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % this.bits.length;
};
