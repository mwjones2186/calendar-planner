//      AS AN employee with a busy schedule
//      I WANT to add important events to a daily planner
//      SO THAT I can manage my time effectively

//      GIVEN I am using a daily planner to create a schedule
//      WHEN I open the planner
//      WHEN I scroll down
//      THEN I am presented with time blocks for standard business hours
//      WHEN I view the time blocks for that day
//      THEN I can enter an event


//      current day is displayed at the top of the calendar
//use moment.js to display the time on HTML
//need to target #currentDay class. Need to add text form of DDMMYY 
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



//      WHEN I click the save button for that time block
//      THEN the text for that event is saved in local storage

//need to target the .saveBtn in the HTML. 
//need an event listener to identify click of the saveBtn
//it needs a function. The function will be local storage. 

$('.saveBtn').on('click', function(){
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val()
//need to create localStorage- local storage needs a (key, value) create VAR for key/value
    localStorage.setItem(key, value);
})


//      WHEN I refresh the page
//      THEN the saved events persist
//need to identify how to grab date from local storage. Use getItem function. 
//Need to target parent child and want thier value. 
$("#4 .description").val(localStorage.getItem("4"))


//      THEN each time block is color-coded to indicate whether it is in the past, present, or future
//      WHEN I click into a time block

