$(document).ready(function() {
    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    console.log(m);
    console.log(currentTime);
    $("#currentDay").text("Today's Date: " + currentDate);
    
    //timeblocks -----
    //create render functions
    //render new event
    //create click functions
    //add event function
    for(var i = 0; i < 3; i++){
        var makeEventDiv = $("<div class='col-2'></div>");
        var makeEventButton = $("<button>")
        var timeDiv = $("<div class='col-2'><p></p></div>");
        var eventDiv = $("<div class='col-8'><p></p></div>");
        makeEventButton.addClass("event-button");
        makeEventButton.text("Add Event");
        timeDiv.text(moment().format('LT'));
        eventDiv.text("Your Event Here");
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        console.log("making buttons");
    }
 })