$(function(){
  // Get data from cookie
  var question_counter = sessionStorage.getItem('total');
  var correct_counter = sessionStorage.getItem('corrects');
  var percentage=0;

  // Display score
  if(question_counter != null) {
    $('#questions-counter').text(question_counter);
  } else {
    $('#questions-counter').text(0);
    $('#correct-counter').text(0);
  }
  if(correct_counter != null) {
    $('#correct-counter').text(correct_counter);
  }

  // Display message
  if(question_counter != null && correct_counter !=null) {
    percentage = correct_counter*1.0 / question_counter;
    console.log(percentage);
    switch (true) {
      case (percentage < 0.5) :
        $('#custom-message').text("Don't worry! Keep trying!");
        break;
      case (percentage < 1) :
        $('#custom-message').text("Good job! Keep going to get full marks!");
        break;
      default:
        $('#custom-message').text("Wow! You have a perfect score!");
        break;
    }
  }
});