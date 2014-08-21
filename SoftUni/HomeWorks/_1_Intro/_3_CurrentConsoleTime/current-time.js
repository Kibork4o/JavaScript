function getTheTime()
{
	var date=new Date();
	var chasove=date.getHours();
	var minuti=date.getMinutes();
	chasove=parseInt(chasove);
	minuti=parseInt(minuti);
	console.log(chasove + ":" + minuti);
}