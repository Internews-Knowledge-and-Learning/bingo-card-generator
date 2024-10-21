window.onload = initAll;
var usedNums = new Array(25);
const options = [];
options.push("Fill out your bio in the people directory","Tag yourself with at least three workplace skills or programmatic expertise areas directory","Tag yourself with your preferred and/or proficient languages in the people directory","Attend three GIG sessions","Submit three times to the gratitude wall","Receive three notifications from the gratitude wall","Someone forgets to unmute their microphone","Someone forgets to mute their microphone","The video freezes (for some or all participants) in a GIG session","Someone (other than you) shows up on video wearing a silly (or exceptionally elegant) hat","Someone (other than you) shows up on video holding a mug of coffee/tea","''Can you see my screen?'","Someone (other than you!) has a custom Teams backdrop","Someone's pet shows up on camera","Someone (other than you!) shares a relevant GIF in the chat","Someone screenshares something that ISN'T powerpoint","'Next slide please'","A group of people join a session from the same room (camera on)","You attend a session that uses Mentimeter","You attend a session that uses Kahoot","You end up on the podium in one of the games... or come dead last","You present in a GIG session","Every team/office is included in the annual roll call :)","A team/office is forgotten in the annual roll call :(","You have a conversation (via call, chat, etc.) with an Internewser you didn't know before","You get recognized for having a notable work anniversary!","You submitted an Around Your Block entry","You told a story in one of the storytelling sessions");

function initAll() {
  if (document.getElementById) {
    //document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<24 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var newNum = getNewNum();

  do{
    newNum = getNewNum();
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;
  var OptionSelected = options[newNum];
  document.getElementById(currentSquare).innerHTML = OptionSelected;
}

function getNewNum() {
  return Math.floor(Math.random() * 26);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}
