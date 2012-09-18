<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>Welcome to Online Tambola</title>
  
  <!-- Included CSS Files (Uncompressed) -->
  <!--
  <link rel="stylesheet" href="stylesheets/foundation.css">
  -->
  
  <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="/stylesheets/foundation.min.css">
  <link rel="stylesheet" href="/stylesheets/app.css">
  <link rel="stylesheet" href="/stylesheets/tambola.css">
  <link href='http://fonts.googleapis.com/css?family=Skranji' rel='stylesheet' type='text/css'>
  <script src="/javascripts/jquery.js"></script>
  <script src="/javascripts/formcheck.js"></script>
  <script src="/javascripts/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  
</head>
<body>

  <div class="row">
    <div class="six columns">
      <h3>Welcome to Online Tambola</h3>
      <p>This is version <strong>0.1</strong> generated on September 14, 2012.</p>
     </div>
     <div class="six columns">
     
     	
     <div class="row"	>
     
     		<br />
     		<form action="login" method="post" onsubmit="return checkLogin()">
     		<input id="l-email" type="text" name="email" placeholder="Email id" class="four columns"/>
     		<small id="l-email-err" class="error">Email</small>
     		<input id="l-pass" type="password" name="passwd" placeholder="Password" class="four columns"/>
     		<small id="l-pass-err" class="error">Password</small>
     		<input type="submit" value="Login"  class="three columns offset-by-one small button" height="30px"/>
     		</form>	    		
     		
    </div>	
     	
     	
     </div>
  </div>

  <div class="row">
    <div class="eight columns">
    <p>We're stoked you want to play the tambola. Simply register here using your email id and start playing.</p>
      <hr />
    </div>

    <div class="four columns">
      
      <h5>Create User Account</h5>
		It just takes 20 seconds
		<hr />
		<form class="nice" action="createUser" onsubmit="return checkCreateUser()">
		<input id ="c-uname" type="text" name="name" placeholder="My name is" />
		<br/>
		<input id="c-email" type="text" name="email" placeholder="My Email id is"/>
		<br />
		<input id ="c-passwd" type="password" name="passwd" placeholder="My Password will be"/>
		
		<div class="row">
		<div class="four columns">
			<input type="submit" value="Create User" class="small blue button"/>
			
		</div>
      
      <div class="eight columns">
      <%!    UserService userService = UserServiceFactory.getUserService();%>
      	<a href="<%= userService.createLoginURL(request.getRequestURI()) %>" class="small blue button">Login Using Google Account</a>
      </div>
      </div>
      </form>
    </div>
  </div>
  
  <!-- footer here -->
  <hr />
  <div class="row">
	<div class="twelve columns links">
		<!-- get the footer here -->
		<a href = "http://siolabs.com/about-tambola">About</a>
		<a href = "http://siolabs.com/team-tambola">Team</a>
		<a href = "http://siolabs.com/blog-tambola">Blog</a>
		<a href = "http://github.com/siolabs/tambola">Source Code</a>
	</div>
</div>

  
  
  
  
  
  <!-- Included JS Files (Uncompressed) -->
  <!--
  
  <script src="javascripts/modernizr.foundation.js"></script>
  
  <script src="javascripts/jquery.js"></script>
  
  <script src="javascripts/jquery.foundation.mediaQueryToggle.js"></script>
  
  <script src="javascripts/jquery.foundation.reveal.js"></script>
  
  <script src="javascripts/jquery.foundation.orbit.js"></script>
  
  <script src="javascripts/jquery.foundation.navigation.js"></script>
  
  <script src="javascripts/jquery.foundation.buttons.js"></script>
  
  <script src="javascripts/jquery.foundation.tabs.js"></script>
  
  <script src="javascripts/jquery.foundation.forms.js"></script>
  
  <script src="javascripts/jquery.foundation.tooltips.js"></script>
  
  <script src="javascripts/jquery.foundation.accordion.js"></script>
  
  <script src="javascripts/jquery.placeholder.js"></script>
  
  <script src="javascripts/jquery.foundation.alerts.js"></script>
  
  -->
  
  <!-- Included JS Files (Compressed) -->
  <script src="/javascripts/foundation.min.js"></script>
  
  
  
  <!-- Initialize JS Plugins -->
  <script src="javascripts/app.js"></script>
</body>
</html>
