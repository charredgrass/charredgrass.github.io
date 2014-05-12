var currentTabOpen = "";

window.onLoad = updateDisplay;

function updateDisplay(){
    var cto = currentTabOpen;
    if (currentTabOpen == "") {
        document.getElementById('stuff').innerHTML = "Click on a tab to view content!";
    }
    if (cto == "stream"){
        document.getElementById('stuff').innerHTML = "<table style=\"width:300px\"><tr><td>Date</td><td>Day</td><td>Movie</td><td>Time</td></td><tr><td>5/16</td><td>Friday</td><td>Frozen</td><td>15:00</td></tr></table>";
    }
    if (cto == "misc"){
        document.getElementById('stuff').innerHTML = "Frozen Merch!!";
    }
    if (cto == "fandom"){
        document.getElementById('stuff').innerHTML = "OMG Frozen is like MLP!";
    }
    if (cto == "fanart"){
        document.getElementById('stuff').innerHTML = "<a href=\"http://kushiyo-takeru.tumblr.com/post/78547271256/it-needed-to-be-done-this\">My parents are deaaaaaaaaad!</a>";
    }
    
    
}
}

function buttonStreamSchedule(){
    if (currentTabOpen != "stream"){
        currentTabOpen = "stream";
    } else {
        currentTabOpen = "";
    }
    updateDisplay();
}

function buttonMiscNews(){
    if (currentTabOpen != "misc"){
        currentTabOpen = "misc";
    } else {
        currentTabOpen = "";
    }
    updateDisplay();
}

function buttonFanNews(){
    if (currentTabOpen != "fandom"){
        currentTabOpen = "fandom";
    } else {
        currentTabOpen = "";
    }
    updateDisplay();
}

function buttonFanArt(){
    if (currentTabOpen != "fanart"){
        currentTabOpen = "fanart";
    } else {
        currentTabOpen = "";
    }
    updateDisplay();
}
