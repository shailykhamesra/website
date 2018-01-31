var WB = WB || {};

WB.Home = function () {
  this.initialize();
} 
WB.Home.prototype= {
  initialize:function() {
    this.HandleChangeImage();
    this.HandleSubmitMyForm();
    this.HandleWork();
    this.HandlePrice();
    this.HandleContact();
    this.mouseOver();
    this.mouseOut();
  },

  HandleChangeImage:function() {
    $('#myPage #WrapperPrice #myImage').click(function(){
      var image = document.getElementById('myImage');
        if (image.src.match("bulbon")) {
            image.src = "assets/images/pic_bulboff.gif";
        } 
        else {
          image.src = "assets/images/pic_bulbon.gif";
        }
    });
  },
  
  HandleSubmitMyForm:function() {
    $('#myPage #WrapperContact #test').click(function(){
      var form = document.getElementById('form1');
      form.onsubmit=function(e) {
      e.preventDefault();
      var result = document.getElementById('result');
      var result1= 'Thankyou, ' + form.fullname.value+ '.  Your feedback " ' + form.feedback.value + ' " ' ;
      $(result).append(result1);
      form.reset;
      }
    });
  },

  HandleWork:function (){
    $('#dis #work').click(function(){
      $('#wrapper').css('display', 'none');
      $('#WrapperPrice').css('display', 'none');
      $('#WrapperContact').css('display', 'none');
      $('#WrapperWork').css('display', 'block');
    });
  },

  HandlePrice:function (){
    $('#dis #price').click(function(){
      $('#wrapper').css('display', 'none');
      $('#WrapperWork').css('display', 'none');
      $('#WrapperContact').css('display', 'none');
      $('#WrapperPrice').css('display', 'block');
    });
  },

  HandleContact:function (){
    $('#dis #contact').click(function(){
      $('#wrapper').css('display', 'none');
      $('#WrapperPrice').css('display', 'none');
      $('#WrapperWork').css('display', 'none');
      $('#WrapperContact').css('display', 'block');
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
$(window).scroll(function(){
    $(".top3").css("opacity", 1 - $(window).scrollTop() / 250);
  });