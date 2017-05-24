// JavaScript Document

$(document).ready(function(e) {
	document.activeElement ("devicerardy",onDeviceReady,false);
	
});

function  onDeviceReady(){
	
 $('#posicion').on('click',function(){
	 getposition ();
 });
 
 $('#whatch').on('click',function(){
	 whatchposition ();
 });
 
}

 function getposition(){
	 var options = {
		 enableHighAccuracy : true,
		 maximumAge:3600000
	 
	 }
	 
 var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError,options);
  
  function onSuccess(position){
	
	alert('latitude:' + position.coords.latitude + '\n'+
	'longitude:' +  position.coords.longitude +'\n'+
	  'altitude:' +  position.coords.altitude +'\n'+
	  'accuracy:' +  position.coords.accuracy +'\n'+
	  'altitude accuracy:' +  position.coords.altitudeAccuracy +'\n'+
	  'heading:' +  position.coords.heading +'\n'+
	  'speed:' +  position.coords.speed +'\n'+
	  'timestamp:' +  position.timestamp +'\n'
	  )};
  
  function onError(error){
	  alert('code:' + error.code +'\n' + 'message:' + error.message + '\n');
  }
 }
 
 function whatchPosition(){
	
	 var options ={
		 maximumAge : 3600000,
		 timeout : 3000,
		 enableHighAccuracy : true,
	 }
	 
	 var whatchID = navigator.geolocation.watchPosition(onSuccess,onError,options);
	 
	 function onSuccess(position) {
		
		 $('#latitud').html(position.coords.latitude);
		 $('#longitud').html(position.coords.longitude);
		 $('#altitud').html(position.coords.altitudeAccuracy);
		 $('#accuracy').html(position.coords.accuracy);
		 $('#aaccuracy').html(position.coords.altitudeAccuracy);
		 $('#headingg').html(position.coords.heading);
		 $('#speed').html(position.coords.spedd);
		 $('#timestamp').html(position.timestamp);
	 };
	 
	 function onError(error) {
		 alert('code:' + error.code + '\n' + 'messege:' + error.message + '\n');
	 }
 }
	 
	 