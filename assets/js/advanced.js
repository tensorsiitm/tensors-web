var code = sessionStorage.getItem("code");
window.alert(code);

var database = firebase.database();

var dataRef = firebase.database().ref("0/"+code);

dataRef.on('value', function(snapshot){
	console.log(snapshot.val());
});