let time = new Date ();
a=(prompt("enter the time"));
time.setHours(a);
hour=time.getHours();
if(hour<3){
	document.write("midnight");
}
else if(hour<12){
	document.write("morning");
}
else if(hour<15){
	document.write("afternoon");
}
else if(hour<18){
	document.write("evening");
}
else if(hour<24){
	document.write("night");
}
else{
	document.write("error")
}