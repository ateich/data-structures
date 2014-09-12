var Graph = function(){
  this.nodes = {};

};

Graph.prototype.addNode = function(newNode, toNode){
  console.log(this.nodes);
  this.nodes[newNode] = {};

  if(!toNode){
    if(Object.keys(this.nodes).length > 1){
      this.addEdge(newNode, Object.keys(this.nodes)[0]);
    }
  } else {
    this.addEdge(newNode, toNode);
  }

};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  if(this.contains(node)){
    delete this.nodes[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //this.nodes[fromNode] returns obj of edges {nodeName: true}
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

  if(Object.keys(this.nodes[fromNode]).length === 0){
    delete this.nodes[fromNode];
  }

  if(Object.keys(this.nodes[toNode]).length === 0){
    delete this.nodes[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
