$(function(){
    var loading = $('#loadbar').hide();
    var questions_counter=0;
    var correct_counter=0;
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
      loading.hide();
    });
    sessionStorage.clear();

    $("label.btn").on('click', function(){
      // show spinning
      $('#loadbar').show();
      $('#quiz').fadeOut();

      attempted = true;
      var choice = $(this).find('input:radio').val();
      // Validate choice
      var answer = $(this).checking(choice);
      questions_counter++;
      correct_counter = updateQuiz(answer, choice, correct_counter, questions_counter);
      setTimeout(function(){
        $('#answer').html(answer);
        $('#quiz').show();
        updateScoreCounter(correct_counter, questions_counter);
        $('#loadbar').fadeOut();
      }, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 

    $('#finish-button').on('click', function() {
    	// Save data to cookie to display on finish page
    	sessionStorage.setItem('corrects',correct_counter);
    	sessionStorage.setItem('total', questions_counter);
    	// Go to finish page
    	window.location.href='/pages/finish.php';
    });
}); 
// Update score counter
function updateScoreCounter(correct_counter, questions_counter) {
  $('#correct-counter').text(correct_counter);
  $('#questions-counter').text(questions_counter);
}

// Update colour of quiz labels based on choice
function updateQuiz(answer, choice, correct_counter, questions_counter){
  // Display the correct choice in green
  $('#option-'+$ans).removeClass('btn-primary');
  $('#option-'+$ans).addClass('btn-success');
  // Display the wrong answer in red
  if(answer == 'INCORRECT') {
    $('#option-'+choice).removeClass('btn-primary');
    $('#option-'+choice).addClass('btn-danger');
  } else {
    correct_counter++;
  }
  return correct_counter;
}