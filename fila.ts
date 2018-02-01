//build a Queue

function Queue(){
	//build a initial structure
	let items =[];

	//inserting items in the queue
	this.enqueue = function(element){
		items.push(element);
	};

	//removing items in the queue
	this.dequeue = function(){
		return items.shift();
	};

	//viewing the first element of the stack
	this.front = function(){
		return items[0];
	};

	//checking if the Queue is empty
	this.isEmpty = function(){
		return items.length == 0;
	};


}