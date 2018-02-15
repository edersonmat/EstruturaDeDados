/* Conjunto é uma coleção de itens não ordenada constituída de elementos
únicos */



//Esqueleto da classe Set

function Set(){
	let items = {};


	//verificando se um valor existe no conjunto
	this.has = function(value){
		return items.hasOwnProperty(value);
	};

	//adicionando um elemento no conjunto

	this.add= function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	};

	//deletando um elemento do conjunto

	this.delete = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	};

	//removendo todos os valores do conjunto
	this.clear = function(){
		items = {};
	};

    //retornando o total de itens no conjunto
    this.size = function(){
    	return Object.keys(items).length;
    };

    //Operação de união
    this.union = function(otherSet){
    	let unionSet = new Set();
    	let values = this.values();
    	for(let i=0; i<values.length; i++)
    	{
    		unionSet.add(values[i]);
    	}
    	values = otherSet.values();
    	for(let i=0;i<values.length; i++){
    		unionSet.add(values[i]);
    	}
    	return unionSet;
    };

    //Interseção de conjuntos

    this.intersection = function (otherSet){
    	let intersectionSet = new Set();

    	let values = this.value();
    	for(let i=0; i<values.length; i++){
    		if(otherSet.has(values[i])){
    			intersectionSet.add(values[i]);
    		}
    	}
    	return intersectionSet;
    };


//Diferença entre conjuntos

this.difference = function(otherSet){
	let differenceSet = new Set();

	let values = this.value();
	for(let i=0; i<values.length; i++){
		if(!otherSet.has(values[i])){
			differenceSet.add(values[i]);
		}
	}
	return differenceSet;
};

//subconjunto

this.subset = function(otherSet){
	if(this.size()> otherSet.size()){
		return false;
	}else{
		let values = this.value();
		for (let i=0; i<values.length; i++){
			if(!otherSet.has(values[i])){
				return false;
			}
		}
		return true;
	}
}





}

