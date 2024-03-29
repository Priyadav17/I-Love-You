//Appearing the "loading button"
function showFunction() { 
    document.getElementById("enable").style.display = "inline"; 
}

setTimeout("showFunction()", 3000);

//Disappearing the "loading button"
setTimeout(function(){
    document.getElementById('disable').style.display ='none'
    },3000);

//Linking to second page
function myFunction() {
    window.location.href = "../Page 3/forthPage.html";
}