$(document).ready(function(){
  $('li').mouseover(function(){
    $(this).fadeTo('fast',0.5);
  });
  $('li').mouseleave(function(){
    $(this).fadeTo('fast',1);
  });
});

$(document).ready(function(){
  $('img').mouseover(function(){
    $(this).fadeTo('fast',0.5);
  });
  $('img').mouseleave(function(){
    $(this).fadeTo('fast',1);
  });

});
