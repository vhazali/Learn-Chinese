$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
      loading.hide();
    });
    
    $("label.btn").on('click',function () {
      var choice = $(this).find('input:radio').val();
      $('#loadbar').show();
      $('#quiz').fadeOut();
      setTimeout(function(){
          var answer = $(this).checking(choice);
           $( "#answer" ).html(answer);
            $('#quiz').show();
            // Display the correct choice in green
            document.getElementById("option-"+$ans).className=document.getElementById("option-"+$ans).className.replace( /(?:^|\s)btn-primary(?!\S)/g , ' btn-success' );
            // Display the wrong answer in red
            if(answer == 'INCORRECT') {
              document.getElementById("option-"+choice).className=document.getElementById("option-"+choice).className.replace( /(?:^|\s)btn-primary(?!\S)/g , ' btn-danger' );
            }
            $('#loadbar').fadeOut();
           /* something else */
      }, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
}); 
