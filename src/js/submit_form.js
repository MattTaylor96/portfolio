var submitBtn = $('#submit-form');
var form = $('#contact-form');
var resultText = $('#form-result');

function resetForm(){
    let email = $('#email'), 
	forename = $('#forename'), 
	surname = $('#surname'), 
	subject = $('#subject'), 
	message = $('#text-area');
    
    email.val('');
    forename.val('');
    surname.val('');
    subject.val('');
    message.val('');
}

submitBtn.on("click", (function(e){
    e.preventDefault();
    
	let email = $('#email').val(), 
	forename = $('#forename').val(), 
	surname = $('#surname').val(), 
	subject = $('#subject').val(), 
	message = $('#text-area').val();

    if(email == "" || forename == "" || surname == "" || subject == "" || message == ""){
        resultText.html('<p class="tagline email-failure">Please enter all the required information</p>')    
    } else {
        let data = {
        email: email, 
        forename: forename, 
        surname: surname, 
        subject: subject, 
        message: message
    };
    
	// Send data to PHP script
	$.post("submit_form.php", data, function(){
        resultText.html('<p class="tagline email-success">Thank you, your message has been sent. I will be in touch shortly.</p>');
        resetForm();
    });
        
    }
    
   
    
}));

