/* Alex Smith
December 4,2016
Project 4 */

var gold = document.getElementById("gold");
var silver = document.getElementById("silver");
var USAc = 0; // for standings
var Canadac = 0; // for standings
var cheer = new Audio("cheer.wav"); // crowd audio

gold.innerHTML = "Gold Medal for USA! With " + USAc +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";

function changeplayer() 
{ 
	// You need to add a statement here to find out who is currently playing the game, “USA” or “Canada” by reading the paragraph “currentplayer” in tictactoe.html, and save it in a variable called player
	var player = document.getElementById("currentplayer").innerHTML;
	var country = document.getElementById("country").innerHTML;

	
	if(country =="USA")
	{
		
		document.getElementById("country").innerHTML = "Canada";
		document.getElementById("currentplayer").innerHTML = "<img src = 'canadianflag.jpg' alt = 'Canada' height = '85' width = '85'>";
	}
	else
	{
		
		document.getElementById("country").innerHTML = "USA";
		document.getElementById("currentplayer").innerHTML = "<img src = 'americanflag.jpg' alt = 'USA' height = '85' width = '85'>";
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
		
		var readpara = document.getElementById("currentplayer").innerHTML;
		var country = document.getElementById("country").innerHTML;
		
		if(country == "USA")
		{
			buttonclicked.innerHTML = "<img src = 'americanflag.jpg' alt = 'USA' height = '85' width = '85'>";
		}
		else
		{
			buttonclicked.innerHTML = "<img src = 'canadianflag.jpg' alt = 'Canada' height = '85' width = '85'>";
		}

		// Add a statement to display the current player (“USA” or “Canada”) on the button clicked (Hint: innerHTML)
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
	var country = document.getElementById("country").innerHTML;
	var head = document.getElementById("head"); //Flags of the currently winning country are displayed next to the title.
	
	
	if(document.getElementById("0").innerHTML ==  document.getElementById("1").innerHTML && document.getElementById("1").innerHTML ==  document.getElementById("2").innerHTML &&document.getElementById("1").innerHTML == player)
	{ 
		cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("3").innerHTML ==  document.getElementById("4").innerHTML && document.getElementById("4").innerHTML ==  document.getElementById("5").innerHTML &&document.getElementById("4").innerHTML == player)
	{ 
		cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("6").innerHTML ==  document.getElementById("7").innerHTML && document.getElementById("7").innerHTML ==  document.getElementById("8").innerHTML &&document.getElementById("7").innerHTML == player)
	{ 
    	cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("0").innerHTML ==  document.getElementById("3").innerHTML && document.getElementById("3").innerHTML ==  document.getElementById("6").innerHTML &&document.getElementById("3").innerHTML == player)
	{ 
    	cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("1").innerHTML ==  document.getElementById("4").innerHTML && document.getElementById("4").innerHTML ==  document.getElementById("7").innerHTML &&document.getElementById("4").innerHTML == player)
	{ 
    	cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("2").innerHTML ==  document.getElementById("5").innerHTML && document.getElementById("5").innerHTML ==  document.getElementById("8").innerHTML &&document.getElementById("5").innerHTML == player)
	{ 
    	cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("0").innerHTML ==  document.getElementById("4").innerHTML && document.getElementById("4").innerHTML ==  document.getElementById("8").innerHTML &&document.getElementById("4").innerHTML == player)
	{ 
    	cheer.play();
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else if(document.getElementById("2").innerHTML ==  document.getElementById("4").innerHTML && document.getElementById("4").innerHTML ==  document.getElementById("6").innerHTML &&document.getElementById("4").innerHTML == player)
	{ 
    	cheer.play(); //Plays cheering crowd audio
		alert("You win! The winner is " + country);
		if(country == "USA")
		{
			USAc = USAc + 1;
		}
		else
		{
			Canadac = Canadac + 1;
		}
  	}
	
	else
	{
		changeplayer();
	}
	
	if(USAc > Canadac) //Used to properly display standings
	{
		if(USAc > 1 && Canadac == 1)
		{
			gold.innerHTML = "Gold Medal for USA! With " + USAc +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victory!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";	
		}
		else if(USAc > 1 && Canadac > 1)
		{
			gold.innerHTML = "Gold Medal for USA! With " + USAc +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";	
		}
		else if(USAc == 1 && Canadac == 1)
		{
			gold.innerHTML = "Gold Medal for USA! With " + USAc +" victory!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victory!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";	
		}
		else if(USAc > 1 && Canadac == 0)
		{
			gold.innerHTML = "Gold Medal for USA! With " + USAc +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		else
		{
			gold.innerHTML = "Gold Medal for USA! With " + USAc +" victory!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for Canada! With " +Canadac +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";	
		}
		
		head.innerHTML = "<img src='americanflag.jpg' alt='USA' height='40' width='40'> Olympic Tic-Tac-Toe <img src='americanflag.jpg' alt='USA' height='40' width='40'>";
	}
	else
	{
		if(Canadac > 1 && USAc == 1)
		{
			gold.innerHTML = "Gold Medal for Canada! With " + Canadac +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for USA! With " +USAc +" victory!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		else if(Canadac > 1 && USAc > 1)
		{
			gold.innerHTML = "Gold Medal for Canada! With " + Canadac +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for USA! With " +USAc +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		else if(Canadac == 1 && USAc == 1)
		{
			gold.innerHTML = "Gold Medal for Canada! With " + Canadac +" victory!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for USA! With " +USAc +" victory!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		else if(Canadac > 1 && USAc == 0)
		{
			gold.innerHTML = "Gold Medal for Canada! With " + Canadac +" victories!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for USA! With " +USAc +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		else
		{
			gold.innerHTML = "Gold Medal for Canada! With " + Canadac +" victory!" + "<img src='gold.png' alt='Gold medal' height='40' width='40'>";
			silver.innerHTML = "Silver Medal for USA! With " +USAc +" victories!" + "<img src='silver.jpg' alt='Silver medal' height='40' width='40'>";
		}
		
		head.innerHTML = "<img src='canadianflag.jpg' alt='Canada' height='40' width='40'> Olympic Tic-Tac-Toe <img src='canadianflag.jpg' alt='Canada' height='40' width='40'>";
	}


}

function resetgame()
{
	var buttons = ["0","1","2","3","4","5","6","7","8"];
	for(var counter = 0; counter < buttons.length; counter++)
	{
		var currentbutton = document.getElementById(buttons[counter]);
		currentbutton.innerHTML = "";
	}
}



