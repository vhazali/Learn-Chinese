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
