var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = {};
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.size()] = makeTree(value);
};

treeMethods.contains = function(target){
  //check the current parent and its children for this value
  //if the parent does not have the target
  //  iteratre through children and repeat

  //debugger;
  if(this.value === target){
    return true;
  } else if(this.size() > 0) {
    for(var i=0; i<this.size(); i++){
      if(this.children[i].contains(target)){
        return true;
      }
    }
    return false;
  }
};

treeMethods.size = function(){
  return Object.keys(this.children).length;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
