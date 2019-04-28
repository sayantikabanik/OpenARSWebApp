(function() {
  const config = {
    apiKey: "pJGAqHFNVyJEzI3WOc52nkQTaxt0HKLJmhb8dN8K",
  authDomain: "openars-a97c6.firebaseapp.com",
  databaseURL: "https://openars-a97c6.firebaseio.com"
  };

  firebase.initializeApp(config);
 /* const bigTextEvaluationStudents = document.getElementById('sensor value');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('sensor value');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());*/

  var table = document.querySelector('#table1');
  const dbEvaluationStudentsRef = firebase.database().ref().child('Address of accident');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
      
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = students[i][j];
			}
		}
  });
}()
 
 

);