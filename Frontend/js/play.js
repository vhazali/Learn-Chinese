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

    $("label.btn").on('click', function() {
      var choice = $(this).find('input:radio').val();
      $('#loadbar').show();
      $('#quiz').fadeOut();
      setTimeout(function(){
        questions_counter++;
        var answer = $(this).checking(choice);
        $( "#answer" ).html(answer);
        $('#quiz').show();
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
            // Update score counter
            $('#correct-counter').text(correct_counter);
            $('#questions-counter').text(questions_counter);

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
