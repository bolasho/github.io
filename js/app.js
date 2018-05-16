//$(document).foundation()
// Submit form with Event Handler function.
$(document).ready(function(){
$(".btn").click(function() {
var name = $(".name").val();
var email = $(".email").val();
var country= $(".country").val();
var NOJ =$(".NOJ").val();
var address=$(".address").val();
var phone_number=$(".pnumber").val();
if (validation()) // Calling validation function.
{
$("#form_id").submit(function() {
alert('Form is submitting....');
//or Do Something...
return true;
});
$("#form_id").submit(); // Form Submission
alert(" Name : " + name + " \n Email : " + email + "\n\n Form Submitted Successfully......");
}
});

// Name and Email validation Function.
function validation() {
var name = $("#name").val();
var email = $("#email").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if (name === '' || email === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
return false;
} else {
return true;
}
}
});
};