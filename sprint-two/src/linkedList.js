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
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
