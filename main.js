// Weight conversion functions
// Hide elements until clicked
document.getElementById("weightOutput").style.visibility = "hidden";

// This allows JS to attach an event to take in numbers and pass "t" as an argument
document.getElementById("weightInput").addEventListener('input', function(t){
document.getElementById("weightOutput").style.visibility = "visible";
var pounds = t.target.value; // target is a property used to extract and add value to the argument
// Converts the "t" value defined as pounds and changes pounds to kg,oz,grams.
document.getElementById("gramsOutput").innerHTML = pounds/0.0022046;
document.getElementById("kgOutput").innerHTML = pounds/2.2046;
document.getElementById("ozOutput").innerHTML = pounds*16;
});

