
function breakTheText(){
    var h1 =document.querySelector("h1");
var h1text = h1.textContent;
var splittedText =h1text.split("");

var halfvalue = splittedText.length/2;
var clutter ="";

splittedText.forEach(function(elem, idx){
    if(idx < halfvalue){
    clutter += `<span class="a">${elem}</span>`

    }else{
        clutter += `<span class="b">${elem}</span>`

    }
   

})
h1.innerHTML = clutter


}
breakTheText();




gsap.from(".a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15



})
gsap.from(".b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15



})