const currentDayBox = $('#currentDay');
const saveButton = $('.saveBtn');

$(function () {
    // TODO: Add a listener for click events on the save button. 
    var timeClock = $(".time-block");
    var presentTime = dayjs().hour();
    timeClock.each(function () {
        
        var idValue = $(this).attr("id")
        
        if (idValue < presentTime) {
          $(this).children(".description").attr("class", "col col-md-10 description past")
          
        } else if (idValue > presentTime) {
          $(this).children(".description").attr("class", "col col-md-10 description future")
          
        } else {
          $(this).children(".description").attr("class", "col col-md-10 description present")
        }
        
      })

      saveButton.onclick = function() {
            var textArea = $(this).siblings(".description").val().replace(time)
    
            var time = $(this).parent().attr("id")
    
            localStorage.setItem(time, JSON.stringify(textArea))
        };
    //shift
      for (var i = 9; i <= 17; i++) {
        $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
      }
    // TODO: Add code to display the current date in the header of the page.
    currentDayBox.text(dayjs().format('ddd, MMMM DD, YYYY [at] hh:mm a'))
  });