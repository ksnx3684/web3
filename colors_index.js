var Body = {
  SetTextColor:function(color){
    document.body.style.color = color;
  },
  SetBackgroundColor:function(color){
    document.body.style.backgroundColor = color;
  }
}
var Link = {
  SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i++;
  }
}
}
function nightDayHandler(self){
  var target = document.body;
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetTextColor('white');
    self.value = 'day';
    Link.SetColor('powderblue');
  }
  else {
    Body.SetBackgroundColor('white');
    Body.SetTextColor('black');
    self.value = 'night';
    Link.SetColor('blue');
  }
}
