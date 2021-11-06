function SetLinkColor(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = color;
    i++;
  }
}
function nightDayHandler(self){
  var target = document.body;
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';
    SetLinkColor('powderblue');
  }
  else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    SetLinkColor('blue');
  }
}
