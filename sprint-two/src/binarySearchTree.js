var makeBinarySearchTree = function(value){
  var node = Object.create(treeMethods);
  node.left;
  node.right;
  node.value = value;
  return node;
};

var treeMethods = {};

treeMethods.insert = function(value){
  if(value > this.value){
    if(this.right){ //means it exists
      this.right.insert(value);
    } else {
      this.right =  makeBinarySearchTree(value);
    }
  }

  if(value < this.value){
    if(this.left) {
      this.left.insert(value);
    } else {
      this.left = makeBinarySearchTree(value);
    }
  }
};

treeMethods.contains = function(value){
  if(this.value === value){
    return true;
  } else if (this.right && value > this.value){
    return this.right.contains(value);
  } else if (this.left && value < this.value){
    return this.left.contains(value);
  }
  return false;
};

treeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};

treeMethods.getSize = function(node){
  return Object.keys(node).length;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
