$(document).ready(function() {
    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();

    // put current date/time in sub title
    $("#currentDay").text("Today's Date: " + currentDate);
    

// event listener for save buttons to add to local storage
    $(".saveBtn").on("click", function() {
        console.log("button duh");        
       var eventInput = $("#description").val();
       localStorage.setItem($((this).attr("data-value")), eventInput);

        });

// Change style base on time
    function timeStyle(){
        if (
            $(".row").attr("data-value") < currentHour) {
                $(".row").attr("class", "row future");
            }
        else if (
            $(".row").attr("data-value") === currentHour) {
                $(".row").attr("class", "row present");
            }
        else (
            $(".row").attr("data-value") < currentHour); {
                $(".row").attr("class", "row past");
            }   
    
    };
    timeStyle();

// create time rows in JS
    //timeblocks -----
    var timeBlock = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
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