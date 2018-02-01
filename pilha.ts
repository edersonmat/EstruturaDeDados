function Stack(){

	let items =[];

	this.push = function(element){
		items.push(element);
	}
	this.pop = function(){
		return items.pop();
	}
	
	this.peek = function(){
		return items[items.length -1];
	}

	this.isEmpty = function(){
		return items.length == 0;
	}

	this.clear = function (){
		items = [];
	}

	this.size = function(){
		return items.length;
	}

	
}

//A classe Stack utilizando a sintaxe EcmaScript 6

const items = new WeakMap();

class Stack {
	constructor (){
		items.set(this, []);
	}
	push(element){
		let s = items.get(this);
		s.push(element);
	}
	pop(){
		let s = items.get(this);
		let r = s.pop();
		return r;
	}
}
