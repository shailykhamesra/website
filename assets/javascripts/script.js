var WB = WB || {};

WB.Home = function () {
  this.initialize();
} 
WB.Home.prototype= {
  initialize:function() {
    this.changeImage();
    this.myForm();
    this.index_work();
    this.index_price();
    this.index_contact();
    this.mouseOver();
    this.mouseOut();
  },

  changeImage:function() {
    $('#myImage').click(function(){
      var image = document.getElementById('myImage');
        if (image.src.match("bulbon")) {
            image.src = "assets/images/pic_bulboff.gif";
        } 
        else {
          image.src = "assets/images/pic_bulbon.gif";
        }
    });
  },
  myForm:function() {
    $('#test').click(function(){
      var form = document.getElementById('form1');
      form.onsubmit=function(e) {
      e.preventDefault();
      form.innerHTML= 'Thankyou, ' + form.fullname.value + '.  Your feedback " ' + form.feedback.value + ' " ';
      form.reset();
      }
    });
  },

  index_work:function (){
    $('#work').click(function(){
      $('#wrapper').css('display', 'none');
      $('#wrapper-price').css('display', 'none');
      $('#wrapper-contact').css('display', 'none');
      $('#wrapper-work').css('display', 'block');
    });
  },

  index_price:function (){
    $('#price').click(function(){
      $('#wrapper').css('display', 'none');
      $('#wrapper-work').css('display', 'none');
      $('#wrapper-contact').css('display', 'none');
      $('#wrapper-price').css('display', 'block');
    });
  },

  index_contact:function (){
    $('#contact').click(function(){
      $('#wrapper').css('display', 'none');
      $('#wrapper-price').css('display', 'none');
      $('#wrapper-work').css('display', 'none');
      $('#wrapper-contact').css('display', 'block');
    });
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