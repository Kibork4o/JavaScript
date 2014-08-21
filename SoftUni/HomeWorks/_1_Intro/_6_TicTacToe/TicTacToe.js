//функцията врюща на кой клик сме (четен или нечетен, за да знае кой е на ход)
function numOfClicks()
{
	var clicker=document.getElementById('whichTurn').value;
	clicker++;
	document.getElementById('whichTurn').value=clicker;
	return clicker;
}
function whichPic(id)
{
	id=id.getAttribute('id');
	if(numOfClicks()%2==0)
	{
		document.getElementById(id).innerHTML="krag";			
		/*for(var i=0; i<document.getElementsByClassName('parts').length; i++) { 
			document.getElementsByClassName('parts')[i].innerHTML=document.getElementsByClassName('parts')[elements.selectedIndex];
		}*/
	}
	else
	{
		document.getElementById(id).innerHTML="hiks";			
		/*for(var i=0; i<document.getElementsByClassName('parts').length; i++) { 
			document.getElementsByClassName('parts')[i].innerHTML=document.getElementsByClassName('parts')[elements.selectedIndex];
		}*/
	}
}