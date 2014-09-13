var makeBinarySearchTree = function(value){
  var node = Object.create(treeMethods);
  node.left;
  node.right;
  node.value = value;
  node.maxDepth = 0;
  node.parent = null;
  return node;
};

var treeMethods = {};

treeMethods.insert = function(value){
  var currentDepth = 1;
  if(value > this.value){
    if(this.right){ //means it exists
      currentDepth += this.right.insert(value);
    } else {
      this.right =  makeBinarySearchTree(value);
      this.right.parent = this;
    }
  }

  if(value < this.value){
    if(this.left) {
      currentDepth += this.left.insert(value);
    } else {
      this.left = makeBinarySearchTree(value);
      this.left.parent = this;
    }
  }

  if(this.parent){
    return currentDepth;
  }

  if(currentDepth > this.maxDepth){
    this.maxDepth = currentDepth;
    if(this.maxDepth > Math.log(this.getSize()) * 2){
      console.log("Tree is rebalancing");
      this.rebalanceTree();
    }
  }
  //compare currentDepth > maxDepth
  //if true, compare against log(n) and determine whether or not to balance
  //if so, call balance function;
};
treeMethods.getSize = function(){
  var counter = 0;

  if(this.left){
    counter+= this.left.getSize();
  }
  if(this.right){
    counter+= this.right.getSize();
  }

  counter++;
  return counter;
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


treeMethods.breadthFirstLog = function(){
  //create queue
  var queue = [];
  queue.push(this);

  while(queue.length > 0){
    //get node
    //log node
    console.log(queue[0]);
    //queue node direct children
    if(queue[0].left){queue.push(queue[0].left);}
    if(queue[0].right){queue.push(queue[0].right);}

    //dequeue node
    queue.shift();
    //repeat on next queued item
  }
};

treeMethods.rebalanceTree = function(){
  var treeValues = [];
  if(this.left){
    return treeValues.concat(this.left.rebalanceTree());
  }

  if(!this.parent){
    return this.value;
  }
  else{
    console.log(treeValues);
  }

  if(this.right){
    return treeValues.concat(this.right.rebalanceTree());
  }

  //by now, we should have a filled sorted array


  //if has left node, recurse left
  //push this to treeValues
  //if has right node, recurse right


  //'flatten' tree
  //if(left)
  //go left all the way
  //if end, go right
  //gets recurised
  //
  //push top node
  //
  //if(right)
  //
  //
  //get center
  //place left right
  //get center of left right
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
