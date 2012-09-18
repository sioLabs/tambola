$(document).ready(function(){
	
	$('.error').hide();
	
	//function to check the login form
	function checkLogin(){
		
		$('.error').hide();
		//check if email is empty
		if($('#l-email').text().trim() === ""){
			$('#l-email').addClass('error');
			$('#l-email-err').show();
			return false;
		}
		
		//check if password is empty
		if($('#l-pass').text().trim() === ""){
			$('#l-padd').addClass('error');
			$('#l-pass-err').show();
			return false;
		}
		return false;
	}
	
	//function to check the createUser form
	function checkCreateUser(){
		
		flag = 1;
		//check if name is empty
		if($('#c-uname').text() === ""){
			return false;
		}
		
		//check if email is empty
		if($('#c-passwd').text() === ""){
			return false;
		}
		
		//check if password is empty
		if($('#c-email').text() === ""){
			return false;
		}
		
		return false;
	}
	
});