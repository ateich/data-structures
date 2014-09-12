describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have links from node to parent', function(){
    tree.addChild(1);
    tree.children[0].addChild(2);
    expect(tree.children[0].children[0].parent.value).to.equal(1);
    expect(tree.children[0].parent).to.equal(null);
  });

  it('should remove parent from node and node from parent children', function(){
    tree.addChild(5);
    var parent = tree.children[0];
    parent.addChild(3);
    parent.addChild(6);
    var child = parent.children[0];
    child.removeFromParent();
    expect(parent.contains(child.value)).to.equal(false);
    expect(child.parent).to.equal(null);
  });

  it('should call callback on each tree node', function(){
    tree.addChild(10);
    tree.children[0].addChild(20);
    tree.children[0].addChild(30);
    tree.children[0].children[0].addChild(40);
    tree.children[0].children[1].addChild(50);
    var callback = function(node){
      node.value++;
    };
    tree.traverse(callback);
    expect(tree.children[0].value).to.equal(11);
    expect(tree.children[0].children[0].value).to.equal(21);
    expect(tree.children[0].children[1].value).to.equal(31);
    expect(tree.children[0].children[0].children[0].value).to.equal(41);
    expect(tree.children[0].children[1].children[0].value).to.equal(51);
  });


});
