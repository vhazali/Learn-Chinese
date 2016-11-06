// Array of questions. Format: 
// questions:[
//   question: ""
//   options: [
//   key: "1"
//   value: "",
//   key: "2" 
//   value: "",
//   key:"3"
//   value: "",
//   key:"4"
//   value: "",
//   key: "ans:"
//   value: ""
//   ],
//   ...
// ]
var questions = [];
var ans = 3;
$(function(){
    var loading = $('#loadbar').hide();
    fetchQuestions();
    var questions_counter=0;
    var correct_counter=0;
    var attempted = false;
    var choice = null;

    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
      nextQuestion('SKIPPED',0,0);
      loading.hide();
    });
    sessionStorage.clear();

    $("label.btn").on('click', function(){
      showSpin();

      attempted = true;
      choice = $(this).find('input:radio').val();
      // Validate choice
      var answer = $(this).checking(choice);
      // Increment counters
      questions_counter++;
      // Update view, show user the result of qn
      setTimeout(function(){
        correct_counter = updateQuizColour(answer, choice, correct_counter);
        updateScoreCounter(correct_counter, questions_counter);
        hideSpin();
      }, 1500);
    });

    $.fn.checking = function(ck) {
        if (ck != ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 

    $('#finish-button').on('click', function(){
      // Save data to cookie to display on finish page
      sessionStorage.setItem('corrects',correct_counter);
      sessionStorage.setItem('total', questions_counter);
      // Go to finish page
      window.location.href='finish.php';
    });

    $('#next-button').on('click', function(){
      showSpin();

      if(!attempted) {
        attempted = true;
        choice = null;
        var answer = 'SKIPPED'
        // Increment counters
        questions_counter++;
        // Update view, show user the result of qn
        setTimeout(function(){
          correct_counter = updateQuizColour(answer, choice, correct_counter);
          updateScoreCounter(correct_counter, questions_counter);
          hideSpin();
        }, 1500);
      } else {
        resetQuizColour(answer, choice);
        ans = nextQuestion(answer, choice, questions_counter);
        setTimeout(function(){
          hideSpin();
        }, 1500);
      }
    })
}); 
// show spinning
function showSpin() {
  console.log("spinning...");
  $('#loadbar').show();
  $('#quiz').fadeOut();
}

// hide spinning
function hideSpin() {
  console.log("stop spinning");
  $('#quiz').show();
  $('#loadbar').fadeOut();
}

function hasQuestions() {
  if (questions.length < 3) 
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
function updateQuizColour(answer, choice, correct_counter){
  // Display the correct choice in green
  $('#option-'+ans).removeClass('btn-primary');
  $('#option-'+ans).addClass('btn-success');
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

function resetQuizColour(answer, choice){
  // Reset the colour of correct choice
  $('#option-'+ans).removeClass('btn-success');
  $('#option-'+ans).addClass('btn-primary');

  // Reset the colour of wrong choice
  if (answer == 'INCORRECT') {
    $('#option-'+choice).removeClass('btn-danger');
    $('#option-'+choice).addClass('btn-primary');
  }
}

function nextQuestion(answer, choice, questions_counter) {
  resetQuizColour(answer, choice);
  if(!hasQuestions()) {
    fetchQuestions();
  }
  // Get from front of questions array
  var next = questions.splice(0,1)[0];
  console.log("answer is: ");             // DEBUG
  console.log(next.options[4].value);     // DEBUG
  // Update question number
  $('#qid').text(questions_counter+1);
  $('#question').text(next.question);
  $('#option-1-value').text(next.options[0].value);
  $('#option-2-value').text(next.options[1].value);
  $('#option-3-value').text(next.options[2].value);
  $('#option-4-value').text(next.options[3].value);
  $('#answer').text();
  return parseInt(next.options[4].value);
}

function fetchQuestions() {
  console.log("fetching questions...");    // DEBUG
  var jqxhr = $.getJSON("../../Backend/data/question-2 nov 2016.json", {
    question: "questions"
  })
    .done(processJson);
}

// Read the JSON object, and then populates the questions array
function processJson(data) {
  console.log("processing json...");    // DEBUG
  var count = data.count;
  for (q in data.questions) {
    options=[];
    for (o in data["questions"][q]) {
      temp = {key:o, value:data["questions"][q][o]};
      options.push(temp);
    }
    questions.push({question:q, options:options});
  }
}