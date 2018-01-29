function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "assets/images/pic_bulboff.gif";
    } else {
        image.src = "assets/images/pic_bulbon.gif";
    }
}
function myForm() {
  var form = document.getElementById('form1');
  form.onsubmit=function(e) {
  e.preventDefault();
  form.innerHTML= 'Thankyou, ' + form.fullname.value + '.  Your feedback " ' + form.feedback.value + ' " ';
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
function index_home(){
  $('#wrapper-work').css('display', 'none');
  $('#wrapper-price').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper').css('display', 'block');
}

function index_work(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-price').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper-work').css('display', 'block');
}

function index_price(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-work').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper-price').css('display', 'block');
}

function index_contact(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-price').css('display', 'none');
  $('#wrapper-work').css('display', 'none');
  $('#wrapper-contact').css('display', 'block');
}

