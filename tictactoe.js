/* Alex Smith
November 10,2016
Project 2 */

function changeplayer() 
{ 
	// You need to add a statement here to find out who is currently playing the game, “X” or “O” by reading the paragraph “currentplayer” in tictactoe.html, and save it in a variable called player
	var player = document.getElementById("currentplayer").innerHTML;

	// Display “X” and “O” by turns
	if(player =="X")
	{
		// The next user to play is “O” if the current user is “X”
		document.getElementById("currentplayer").innerHTML = "O";
	}
	else
	{
		// Complete the else block
		// The next user to play is “X” if the current user is “O”
		document.getElementById("currentplayer").innerHTML = "X";
	}
}

function set(idvalue) 
{ 
	// Get access to the button clicked in tictactoe.html by idvalue
	var buttonclicked = document.getElementById(idvalue);
	
	if(buttonclicked.innerHTML == ""||buttonclicked.innerHTML == null)
	{
	 // If the button is not clicked 



	// If the button is not clicked 
	// Complete the function from here
	// Add a statement to find out who is the current player, “X” or “O” by reading paragraph with id “currentplayer” in tictactoe.html
	var readpara = document.getElementById("currentplayer").innerHTML;

	// Add a statement to display the current player (“X” or “O”) on the button clicked (Hint: innerHTML) 
	buttonclicked.innerHTML = readpara;
	changeplayer();
	}
	else
	{
		alert("You cannot select this button!");
	}

	
}
