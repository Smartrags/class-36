class Form {
constructor() {

}
display() {
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130,0);
    var input = createInput("name");
    var button = createButton('play');
    var greeting = createElement('h4');
    input.position(130,160);
    button.position(250,200);
button.mousePressed(function () {
input.hide()
button.hide()
var name= input.value()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
greeting.html("Welcome to the Car Racing Game"+name)
greeting.position(130,160);

}) 
    
}
}
