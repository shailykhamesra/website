 alert("welcome to my website!");

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "/Users/shailykhamesra/Desktop/website1/assets/images/pic_bulboff.gif";
    } else {
        image.src = "/Users/shailykhamesra/Desktop/website1/assets/images/pic_bulbon.gif";
    }
}
function myForm() {
	var form = document.getElementById('form1');
	form.onsubmit=function(e) {
		e.preventDefault();
	form.innerHTML= 'Thankyou, ' + form.fullname.value + '.  Your feedback is valuable !';
	form.reset();
	}
	}
function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}
function abc(){

document.getElementById('id01').style.display='none';
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
function myForm2() {
    var form2 = document.getElementById('form2');
    form2.onsubmit=function(e) {
        e.preventDefault();
    form2.innerHTML= 'Thankyou, ' + form2.uname.value + '.  For you interest !';
    form2.reset();
    }
    }