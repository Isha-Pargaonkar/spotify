//Dectect button press
var SideNav= document.querySelectorAll(".sidenav").length;
for(var i=0;i<SideNav;i++)
{
  document.querySelectorAll(".sidenav")[i].addEventListener("click",handleClick)

}
function handleClick()
{
  var butnInnerHTML= this.innerHTML;
  buttonAnimation(butnInnerHTML);
}

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
}
