
//Changing gif
const img = document.getElementById('image');

const images = {
    hi: "Assets/hi.gif",
    ori: "Assets/sad.gif"
}

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};


//Yes button bg image
var body = document.body;

function bg() {
	body.className = 'hovered';
};

function resetBG(){
	body.className = '';
};

//Linking to second page
function myFunction() {
    window.location.href = "Pages/Page 1/secondPage.html";
}
