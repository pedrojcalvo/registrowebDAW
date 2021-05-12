$(document).ready(function(){
    var blackLine = $(".black-line"),
        ball = $(".main-container"),
        mainForm = $(".SelectButton"),
        top = $(".BB-top-part"),
        bottom = $(".BB-bottom-part"),
        tl = new TimelineMax();
  
        // Start
        tl
        .to(blackLine,0.5,{className:'+=red-circle'})
        .to(blackLine,0.5,{className:'-=red-circle'})
        .to(blackLine,0.5,{className:'+=red-circle'})
        .to(blackLine,0.5,{className:'-=red-circle'})
        .to(blackLine,0.5,{className:'+=red-circle'})
        .to(blackLine,0.5,{className:'-=red-circle'})
        .to(blackLine,0.5,{className:'+=red-circle'})
        .to(blackLine,0.5,{className:'-=red-circle'})
        .to(ball,0.5,{y:"-70%",ease:Power4.easeOut})
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut})
        .to(ball,0.5,{y:"-85%",ease:Power4.easeOut},"+=0.5")
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut})
        .to(ball,0.5,{y:"-100%",ease:Power4.easeOut},"+=0.5")
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut,onComplete:toggle})
        ;
        function toggle(o){
          $(".SelectButton").slideDown(1500);
          tl
          .to(top,1,{autoAlpha:0})
          .to(bottom,1,{autoAlpha:0},"-=1")
          .fromTo(h,1,{autoAlpha:0,y:-20},{autoAlpha:1,y:0},"+=0.5")
          .staggerFrom(row,1,{left:"-100%",autoAlpha:0},0.2)
          .staggerFrom(rem,1,{cycle:{y:[20,-20]},autoAlpha:0},0.2)
  
  }
  
})

function openRegister() {
    $('#SelectButton').hide();
    $('#LoginForm').hide();  
    $('#RegisterForm').show();
    
    $('#L-Username').val('');
    $('#L-Email').val('');
    $('#L-Password').val('');
    $('#AcceptRelogin').prop('checked', false);
}
  
function openLogin() {
    $('#SelectButton').hide();
    $('#RegisterForm').hide();  
    $('#LoginForm').show();

    $('#Username').val('');
    $('#Email').val('');
    $('#Password').val('');
    $('#C-Password').val('');
    $('#AcceptNewsletter').prop('checked', false);
    $('#AcceptPolicy').prop('checked', false);
}
  
function backBegin() {
    $('#SelectButton').show();
    $('#RegisterForm').hide();
    $('#LoginForm').hide();

    $('#Username').val('');
    $('#Email').val('');
    $('#Password').val('');
    $('#C-Password').val('');
    $('#AcceptNewsletter').prop('checked', false);
    $('#AcceptPolicy').prop('checked', false);
    $('#L-Username').val('');
    $('#L-Email').val('');
    $('#L-Password').val('');
    $('#AcceptRelogin').prop('checked', false);
}
  