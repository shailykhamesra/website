var WB = WB || {};

WB.Work = function () {
  this.initialize();
} 
WB.Work.prototype= {
  initialize:function() {
    this.mouseOver();
    this.mouseOut();
},
mouseOver:function () {
  document.getElementById("demo").onmouseover = function(){
  document.getElementById("demo").style.color = "red";
 }
},

mouseOut:function ()  {
  document.getElementById("demo").onmouseout = function(){
  document.getElementById("demo").style.color = "black";
}
}
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
