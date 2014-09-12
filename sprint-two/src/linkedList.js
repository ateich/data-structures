var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if(list.tail === null){
      list.head = node;
      list.tail = node;
    }else{
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if(list.head){
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    } else {
      list.head = node;
      list.tail = head;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.removeTail = function(){
    var tail = list.tail;
    list.tail = list.tail.previous;
    return tail.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target){
        return true;
      }else{
        currentNode = currentNode.next;
      }
    }
    return false;
  };


  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
