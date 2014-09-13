var makeBinarySearchTree = function(value){
  var node = Object.create(treeMethods);
  node.left;
  node.right;
  node.value = value;
  node.currentDepth = 0;
  node.maxDepth = 0;
  node.parent = null;
  return node;
};

var treeMethods = {};

treeMethods.insert = function(value, depth){
  if(!depth){
    depth = 0;
  }
  depth++;
  if(value > this.value){
    if(this.right){ //means it exists
      depth = this.right.insert(value, depth);
    } else {
      this.right =  makeBinarySearchTree(value);
      this.right.parent = this;
      return this.maxDepth = depth;
    }
  }

  if(value < this.value){
    if(this.left) {
      depth = this.left.insert(value, depth);
      // currentDepth --;
    } else {
      this.left = makeBinarySearchTree(value);
      this.left.parent = this;
      return this.maxDepth = depth;
    }
  }

  if(this.parent){
    return depth;
  } else if(depth > this.maxDepth) {

    this.maxDepth = depth;

    console.log('MAX DEPTH ' + this.maxDepth);
    if(this.maxDepth > this.log2(this.getSize()) * 2){
      this.rebalanceTree();

      //SET CURRENT TREE TO REBALANCED TREEnode.left;
      this.left = this.node.left;
      this.right = this.node.right;
      this.value = this.node.value;
      this.currentDepth = this.node.currentDepth;
      this.maxDepth = this.node.maxDepth;
      this.parent = null;
    }
  }
};

treeMethods.log2 = function(num){
  return Math.log(num) / Math.LN2;
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
    //queue node direct children
    if(queue[0].left){
      queue.push(queue[0].left);
    }
    if(queue[0].right){
      queue.push(queue[0].right);
    }

    //dequeue node
    queue.shift();
    //repeat on next queued item
  }
};

treeMethods.getTreeArray = function(treeArray){
  if(!treeArray){
    treeArray = [];
  }

  if(this.left){
    treeArray.concat(this.left.getTreeArray(treeArray));
  }

  treeArray.push(this.value);

  if(this.right){
    treeArray.concat(this.right.getTreeArray(treeArray));
  }

  if(!this.parent){
    return treeArray;
    //call actual balancing method
  }
};

treeMethods.rebalanceTree = function(treeArray, tree){
  if(!treeArray){
    treeArray = this.getTreeArray();
  }

  var middle = Math.floor(treeArray.length / 2);

  //check for tree existance
  if(!tree){
    //if no tree, create new tree with floor of middle index
    this.node = tree = makeBinarySearchTree(treeArray[middle]);
  } else {
    //otherwise insert into tree
    tree.insert(treeArray[middle]);
  }
  //split remaining left and right hand side values into arrays
    var leftArray = treeArray.slice(0, middle);
    var rightArray = treeArray.slice(middle+1, treeArray.length);

  //recurse
    if(leftArray && leftArray.length > 0){
      this.rebalanceTree(leftArray, tree);
    }
    if(rightArray && rightArray.length > 0){
      this.rebalanceTree(rightArray, tree);
    }



};

/*
 * Complexity: What is the time complexity of the above functions?
 */
