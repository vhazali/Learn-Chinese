$(function(){
    var loading = $('#loadbar').hide();
    var questions_counter=0;
    var correct_counter=0;
    var attempted = false;
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
      loading.hide();
    });
    sessionStorage.clear();

    $("label.btn").on('click', function(){
      showSpin();

      attempted = true;
      var choice = $(this).find('input:radio').val();
      // Validate choice
      var answer = $(this).checking(choice);
      // Increment counters
      questions_counter++;
      // Update view, show user the result of qn
      setTimeout(function(){
        correct_counter = updateQuiz(answer, choice, correct_counter, questions_counter);
        updateScoreCounter(correct_counter, questions_counter);
        hideSpin();
      }, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 

    $('#finish-button').on('click', function(){
      // Save data to cookie to display on finish page
      sessionStorage.setItem('corrects',correct_counter);
      sessionStorage.setItem('total', questions_counter);
      // Go to finish page
      window.location.href='/pages/finish.php';
    });

    $('#next-button').on('click', function(){
      showSpin();

      if(!attempted) {
        attempted = true;
        var answer = 'SKIPPED'
        // Increment counters
        questions_counter++;
        // Update view, show user the result of qn
        setTimeout(function(){
          correct_counter = updateQuiz(answer, null, correct_counter, questions_counter);
          updateScoreCounter(correct_counter, questions_counter);
          hideSpin();
        }, 1500);
      } else {
        nextQuestion(questions_counter);
      }
    })
}); 
// show spinning
function showSpin() {
  $('#loadbar').show();
  $('#quiz').fadeOut();
}

// hide spinning
function hideSpin() {
  $('#quiz').show();
  $('#loadbar').fadeOut();
}

function hasQuestions (count) {
  if (count < 3) 
    return false;
  return true;
}

// Update score counter
function updateScoreCounter(correct_counter, questions_counter) {
  $('#correct-counter').text(correct_counter);
  $('#questions-counter').text(questions_counter);
}

// Update colour of quiz labels based on choice
// If user skips question, call this function with choice as null
// This function will display the correct answer in green, and iff
// the user selected a wrong option, it will be shown in red.
function updateQuiz(answer, choice, correct_counter, questions_counter){
  // Display the correct choice in green
  $('#option-'+$ans).removeClass('btn-primary');
  $('#option-'+$ans).addClass('btn-success');
  // Display the wrong answer in red
  switch (answer) {
    case 'CORRECT':
      correct_counter++;
      break;
    case 'INCORRECT':
      $('#option-'+choice).removeClass('btn-primary');
      $('#option-'+choice).addClass('btn-danger');
      break;
    case 'SKIPPED' :
      // Do nothing
      break;
  }
  $('#answer').html(answer);
  return correct_counter;
}

function nextQuestion(questions_counter) {
  showSpin();
  fetchQuestions();
   // Update question number
  $('#qid').text(questions_counter+1);
}

function fetchQuestions() {
  var jqxhr = $.getJSON("../../Backend/data/output.json", {
    question: "questions"
  })
    .done(processJson)
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
}

function processJson(data) {
  console.log(data);
}