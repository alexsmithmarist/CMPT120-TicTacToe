/* Alex Smith
November 18,2016
Project 3 */

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
	check_win();
	}
	else
	{
		alert("You cannot select this button!");
	}

	
}

function check_win() 
{ 
	var player = document.getElementById("currentplayer").innerHTML;
	
	if(document.getElementById("0").innerHTML ==  document.getElementById("1").innerHTML && document.getElementById("1").innerHTML ==  document.getElementById("2").innerHTML &&document.getElementById("1").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("1").innerHTML ==  document.getElementById("2").innerHTML && document.getElementById("2").innerHTML ==  document.getElementById("3").innerHTML &&document.getElementById("2").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("4").innerHTML ==  document.getElementById("5").innerHTML && document.getElementById("5").innerHTML ==  document.getElementById("6").innerHTML &&document.getElementById("5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("5").innerHTML ==  document.getElementById("6").innerHTML && document.getElementById("6").innerHTML ==  document.getElementById("7").innerHTML &&document.getElementById("6").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("8").innerHTML ==  document.getElementById("9").innerHTML && document.getElementById("9").innerHTML ==  document.getElementById("10").innerHTML &&document.getElementById("9").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("9").innerHTML ==  document.getElementById("10").innerHTML && document.getElementById("10").innerHTML ==  document.getElementById("11").innerHTML &&document.getElementById("10").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("12").innerHTML ==  document.getElementById("13").innerHTML && document.getElementById("13").innerHTML ==  document.getElementById("14").innerHTML &&document.getElementById("13").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("13").innerHTML ==  document.getElementById("14").innerHTML && document.getElementById("14").innerHTML ==  document.getElementById("15").innerHTML &&document.getElementById("14").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("0").innerHTML ==  document.getElementById("4").innerHTML && document.getElementById("4").innerHTML ==  document.getElementById("8").innerHTML &&document.getElementById("4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("4").innerHTML ==  document.getElementById("8").innerHTML && document.getElementById("8").innerHTML ==  document.getElementById("12").innerHTML &&document.getElementById("8").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("1").innerHTML ==  document.getElementById("5").innerHTML && document.getElementById("5").innerHTML ==  document.getElementById("9").innerHTML &&document.getElementById("5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("5").innerHTML ==  document.getElementById("9").innerHTML && document.getElementById("9").innerHTML ==  document.getElementById("13").innerHTML &&document.getElementById("9").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("2").innerHTML ==  document.getElementById("6").innerHTML && document.getElementById("6").innerHTML ==  document.getElementById("10").innerHTML &&document.getElementById("6").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("6").innerHTML ==  document.getElementById("10").innerHTML && document.getElementById("10").innerHTML ==  document.getElementById("14").innerHTML &&document.getElementById("10").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("3").innerHTML ==  document.getElementById("7").innerHTML && document.getElementById("7").innerHTML ==  document.getElementById("11").innerHTML &&document.getElementById("7").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("7").innerHTML ==  document.getElementById("11").innerHTML && document.getElementById("11").innerHTML ==  document.getElementById("15").innerHTML &&document.getElementById("11").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("0").innerHTML ==  document.getElementById("5").innerHTML && document.getElementById("5").innerHTML ==  document.getElementById("10").innerHTML &&document.getElementById("5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("1").innerHTML ==  document.getElementById("6").innerHTML && document.getElementById("6").innerHTML ==  document.getElementById("11").innerHTML &&document.getElementById("6").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("4").innerHTML ==  document.getElementById("9").innerHTML && document.getElementById("9").innerHTML ==  document.getElementById("14").innerHTML &&document.getElementById("9").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("5").innerHTML ==  document.getElementById("10").innerHTML && document.getElementById("10").innerHTML ==  document.getElementById("15").innerHTML &&document.getElementById("10").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("2").innerHTML ==  document.getElementById("5").innerHTML && document.getElementById("5").innerHTML ==  document.getElementById("8").innerHTML &&document.getElementById("5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("3").innerHTML ==  document.getElementById("6").innerHTML && document.getElementById("6").innerHTML ==  document.getElementById("9").innerHTML &&document.getElementById("6").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("6").innerHTML ==  document.getElementById("9").innerHTML && document.getElementById("9").innerHTML ==  document.getElementById("12").innerHTML &&document.getElementById("9").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else if(document.getElementById("7").innerHTML ==  document.getElementById("10").innerHTML && document.getElementById("10").innerHTML ==  document.getElementById("13").innerHTML &&document.getElementById("10").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	
	else
	{
		changeplayer(); // nobody wins, change player
	}

}

