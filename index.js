const watch=require('./watches/digitalwatches');

//use set interval function to call the indianwatch after every second 
setInterval(watch.indianWatch,1000);