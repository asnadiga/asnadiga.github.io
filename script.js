var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("toDo")


function addElem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li);
	input.value = "";



	function important(){
		li.classList.toggle("emph");
	}

	li.addEventListener("click", important);
	



	function deleteElem() {
		li.classList.add("deleted");
	}

	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("X"));
	li.appendChild(delButton)
	delButton.addEventListener("click", deleteElem);

}

function onClick(event){
	if(input.value.length > 0){
		addElem();
	}
}

function onKeypress(event){
	if(event.which === 13 && input.value.length > 0){
		addElem();
	}
}

enterButton.addEventListener("click", onClick);
input.addEventListener("keypress", onKeypress);