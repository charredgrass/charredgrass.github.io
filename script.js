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
}

function buttonStreamSchedule(){
    if (currentTabOpen != "stream"){
        currentTabOpen = "stream";
    } else {
        currentTabOpen = "";
    }
    updateDisplay();
}

function butt(mod) {
    currentTabOpen = mod;
}
