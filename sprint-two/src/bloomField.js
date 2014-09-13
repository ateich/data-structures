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

MakeBloom.prototype.test = function(){
  this.add('bob');
  this.add('janet');
  this.add('john');
  this.add('steve');

  this.add('test');
  this.add('ball');
  this.add('pc');
  this.add('hr');

  var actualPositives = 4;
  var returnedPositives = 0;

  for(var i = 0; i< 100000; i++){
    var found;

    if(i === 1){
      found = this.query('bob');
    } else if(i===100){
      found = this.query('janet');
    } else if(i===400){
      found = this.query('john');
    } else if (i === 900){
      found = this.query('steve');
    } else {
      found = this.query(i);
    }

    if(found){
      returnedPositives++;
    }
  }
  //(1- e^(-kn/m))^k) k=3 m=18 n=8 (1- e^(-3*8/18))^3)

  console.log('Actual is ' + actualPositives + ' Returned ' + returnedPositives);
}
