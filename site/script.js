(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
	if (firstLetter === 'j') {
    console.log("goodbye " + 'j' + names[i]);
  } else {
   console.log("hello " + names[i]);
  }
}

})(); 