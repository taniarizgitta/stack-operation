
let pushbtn = document.getElementById('push');
let emptybtn = document.getElementById('empty');
let peekbtn = document.getElementById('peek');
let appendel = document.getElementById('placehere');
let inp = document.getElementById('inp');

pushbtn.onclick = function(){
  push(inp.value);
};
peekbtn.onclick = function(){
  peek();
};
emptybtn.onclick = function(){
  empty();
}

function Queue(){
  this.data = [];
}

Queue.prototype.add = function(rec){
  this.data.unshift(rec);
};
Queue.prototype.remove = function(rec){
  this.data.pop();
};

const q = new Queue();

function push(val){
  if(q.data.length < 5){
    q.add(val);
    appendElement(val);
  }else{
    alert("your input has reached!");
  }
  console.log(q.data.length);
  inp.value = '';
}

function peek(){
  console.log(q.data[0]);
  alert("Topmost item is: "+q.data[0]);
}

function empty(){
  if(q.data.length > 0){
    alert("True - stack is not empty!");
  }else{
    alert("False - stack is empty!");
  }
}

function appendElement(val){
  var node = document.createElement("LI");
  var valnode = document.createTextNode(val);
  node.appendChild(valnode);

  // appendel.appendChild(node);
  appendel.insertBefore(node, appendel.firstChild);
}
