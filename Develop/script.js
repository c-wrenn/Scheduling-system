// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDayBox = $('#currentDay');
const saveButton = $('.saveBtn');
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.
    // saveBtn.addEventListener("click", function(e) {
    //     var textArea = $(this).siblings(".description").val().replace(time)

    //     var time = $(this).parent().attr("id")

    //     localStorage.setItem(time, JSON.stringify(textArea))
    // });
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    var timeClock = $(".time-block");
    var presentTime = dayjs().hour();
    timeClock.each(function () {
        
        var idValue = $(this).attr("id")
        // if the current hour is less than the number of each time block id, the past color will be applied from css class
        if (idValue < presentTime) {
          $(this).children(".description").attr("class", "col col-md-10 description past")
          // else if the current hour is greater than the number of each time block id, the furture color will be applied from css class
        } else if (idValue > presentTime) {
          $(this).children(".description").attr("class", "col col-md-10 description future")
          // else (both of the above conditions are not met to the number of each time block id) the present color will be applied from css class
        } else {
          $(this).children(".description").attr("class", "col col-md-10 description present")
        }
        
      })
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    // saveButton.on("click", function () {
    //     var text = $(this).siblings(".description").val().replace(time)
    //     var time = $(this).parent().attr("id")
    //     localStorage.setItem(time, JSON.stringify(text))
    //   })

      saveButton.addEventListener("click", function(e) {
            var textArea = $(this).siblings(".description").val().replace(time)
    
            var time = $(this).parent().attr("id")
    
            localStorage.setItem(time, JSON.stringify(textArea))
        });
    //shift
      for (var i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
      }
    // TODO: Add code to display the current date in the header of the page.
    currentDayBox.text(dayjs().format('ddd, MMMM DD, YYYY [at] hh:mm a'))
  });