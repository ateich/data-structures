var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = {};
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = this.children[this.size()] = makeTree(value);
  if(this.value){
    node.parent = this;
  }
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else if(this.size() > 0) {
    for(var key in this.children){
      if(this.children[key].contains(target)){
        return true;
      }
    }
    return false;
  }
};

treeMethods.size = function(){
  return Object.keys(this.children).length;
};

treeMethods.removeFromParent = function(){
  var parent = this.parent;
  for(var key in parent.children){
    if(this === parent.children[key]){
      delete parent.children[key];
      this.parent = null;
    }
  }
};

treeMethods.traverse = function(callback){
  callback(this);

  for(var key in this.children){
    this.children[key].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
