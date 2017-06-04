
var turn;

function cellClicked(event){

	event.target.innerHTML = turn ? "0" : "X";
	turn = !turn;
}

