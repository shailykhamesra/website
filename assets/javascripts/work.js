var WB = WB || {};

WB.Work = function () {
  this.initialize();
} 
WB.Work.prototype= {
  initialize:function() {
    this.mouseOver();
    this.mouseOut();
    this.joinb();
    this.SubmitForm2();
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
  },

  joinb:function (){
    $('#index2 #join1').click(function(){
      document.getElementById('id01').style.display='block';
    });
    $('#con #join').click(function(){
      document.getElementById('id01').style.display='none';
      var modal = document.getElementById('id01');
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  },

  SubmitForm2:function () {
    $('#index2 #id01 #subm').click(function(){
      var form2 = document.getElementById('form2');
      form2.onsubmit=function(e) {
      e.preventDefault();
      form2.innerHTML= 'Thankyou, ' + form2.uname.value + '.  For you interest !';
      form2.reset();
      }
    });
  }
}