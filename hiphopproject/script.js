// read more btn
let dots = document.getElementsByClassName('punkte');
let hidden = document.getElementsByClassName('hidden');
let extend = document.getElementsByClassName('extend');
let status = 'off';
let olddata;
function show(event){
  let id = event.target.id;
  if (status == 'off') {
    olddata = extend[id].style.bottom;
    hidden[id].style.opacity = 1;
    dots[id].style.display = 'none';
    extend[id].innerHTML = 'Read less';
    extend[id].style.bottom = '0';
    status = 'on';
  } else if (status == 'on'){
    hidden[id].style.opacity = 0;
    dots[id].style.display = 'inline';
    extend[id].innerHTML = 'Read more';
    status = 'off';
    extend[id].style.bottom = olddata;
  }
}
//to top btn
$(document).ready(function(){
  $('#to-top').click(function(e){
    e.preventDefault();
    let link = $('#to-top').attr('href');
    $('html,body').animate({
      scrollTop: $(link).offset().top
    },1500);
  });
});
// banner slide show
let dot = document.getElementsByClassName('dots');
let slides = document.getElementsByClassName('songs');
let index = 1;
// function convert(obj){
//  return $(obj).css('z-index');
//}



function display(endpoint,dir){
   let result;
   let target;
   if (endpoint == 1) {
      target = 'rap3';
   } else {
     target = 'rap2';
   }
   let hiddenName = document.getElementById(target).className;
   let hiddenItem = document.getElementsByClassName(hiddenName);
   hiddenItem[0].style.display = 'none';
   setTimeout(function (){
     for (var i = 0; i < slides.length; i++) {
        let num = slides[i].id[3].charCodeAt() - '0'.charCodeAt();
        if (num == endpoint ) {
          if (endpoint == slides.length) {
            slides[i].id= 'rap'+1;
          } else {
            slides[i].id= 'rap'+ slides.length;
          }
        }else {
          let result = num + dir;
          slides[i].id = 'rap'+result.toString();
        }
     }
   },300);
   setTimeout(function (){
      hiddenItem[0].style.display = 'block';
   },1000);
   showdots(dir);
}

function showdots(dir){
  index = index + dir;
  if (index > dot.length) {
    index = 1;
  } else if (index < 1){
    index = dot.length;
  }
  for (var i = 0; i < dot.length; i++) {
    dot[i].removeAttribute('id');
  }
  dot[index-1].id = 'active';
}
function next(){
  display(slides.length,1);
}
function prev(){
  display(1,-1);
}
