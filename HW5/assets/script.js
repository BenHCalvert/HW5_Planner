$(document).ready(function () {
    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();
    console.log('current hour: ', currentHour)

    // put current date/time in sub title
    $("#currentDay").text("Today's Date: " + currentDate);


    // event listener for save buttons to add to local storage
    $(".saveBtn").on("click", function () {
        console.log("button duh");
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });

    // Change style base on time
    function timeStyle() {
        for (let i = 6; i < 18; i++) {

            let hour = '#' + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            // console.log('schedule hour: ', scheduleHour);
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            }
            else if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            }
            else if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }

        };
    }
    timeStyle();

    // on refresh, loop through time block and grab values from local storage 'getItem' what happens if you don't have a value in a certain time block (this may or may not happen).
    var timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];




    // create time rows in JS
    //timeblocks -----





    // Loop to create row for each hour
    // for(var i = 0; i < timeBlock.length; i++){
    //     var makeEventDiv = $("<div class='col-2'></div>");
    //     var makeEventButton = $("<button>")
    //     var timeDiv = $("<div class='col-2' value='" + timeBlock[i] + "'><p></p></div>");
    //     var eventDiv = $("<div class='col-8'><input type='text' id='eventInput' data-value='" + timeBlock[i] + "'></div>");
    //     makeEventButton.addClass("event-button");
    //     makeEventButton.text("Save");
    //     timeDiv.text(timeBlock[i]);      
    //     $(".row").append(timeDiv);
    //     $(".row").append(eventDiv);
    //     $(".row").append(makeEventButton);
    //     console.log("making buttons");
    // }



})