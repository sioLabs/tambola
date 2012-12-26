$(document).load(function(){
	alert("hi");
	$('#l-email').removeClass('error');
	$('#l-pass').removeClass('error');
	$('.error').hide();

	function checkLogin(){
	//check if email is empty
	if($('#l-email').val().trim() === ""){
		$('#l-email').addClass('error');
		$('#l-email-err').show();
		$('#l-email').focus();
		return false;
	}
	
	//check if password is empty
	if($('#l-pass').val().trim() === ""){
		$('#l-pass').addClass('error');
		$('#l-pass-err').show();
		$('#l-pass').focus();
		return false;
	}
	return true;
	};
//function to get response parameters
/*function getParameterByName(name){
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
*/
//function to check the createUser form
function checkCreateUser(){
	$('.error').hide();
	
	//check if name is empty
	if($('#c-uname').val().trim() === ""){
		$('#c-uname-err').show();
		$('#c-uname').focus();
		return false;
	}
	
	//check if password is empty
	if($('#c-email').val().trim() === ""){
		$('#c-email-err').show();
		$('#c-email').focus();
		return false;
	}
	
	//check if email is empty
	if($('#c-pass').val().trim() === ""){
		$('#c-pass-err').show();
		$('#c-pass').focus();
		return false;
	}	
	
	
	return true;
};



});