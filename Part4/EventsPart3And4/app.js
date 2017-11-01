document.addEventListener("DOMContentLoaded", function(){
	let counter = 0;
	document.querySelector("#add").addEventListener("click", add);
	document.querySelector("#complete").addEventListener("click", complete);
	document.querySelector("#remove").addEventListener("click", remove);

	function add() {
		let input = prompt("What do you want to add?");
		if(input === null) return 0;
		counter++;
		let row = document.createElement("tr");
		let id = document.createElement("td");
		let todo = document.createElement("td");
		let comp = document.createElement("td");
		row.setAttribute("class", counter);
		id.innerText = counter;
		todo.innerText = input;
		comp.innerText = "";
		document.querySelector("tbody").appendChild(row);
		document.querySelector("tbody tr:last-child").appendChild(id);
		document.querySelector("tbody tr:last-child").appendChild(todo);
		document.querySelector("tbody tr:last-child").appendChild(comp);
	}

	function complete() {
		let input = prompt("Enter the id of the task you completed");
		document.getElementsByClassName(input)[0].children[2].innerText = "X";
	}

	function remove() {
		let input = prompt("Enter the id of the task you want to remove");
		let toRemove = document.getElementsByClassName(input)[0];
		toRemove.parentElement.removeChild(toRemove);
	}
})

