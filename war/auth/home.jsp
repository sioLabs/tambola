<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<html>
<head>
	<title>Welcome to online tambola | Play the game</title>
	 <!-- Included CSS Files (Compressed) -->
  <link rel="stylesheet" href="/stylesheets/foundation.min.css">
  <link rel="stylesheet" href="/stylesheets/app.css">
  <link rel="stylesheet" href="/stylesheets/tambola.css">
  <link href='http://fonts.googleapis.com/css?family=Skranji' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Life+Savers' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Bubbler+One' rel='stylesheet' type='text/css'>
  
  <script src="javascripts/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

<% UserService user = UserServiceFactory.getUserService(); %>
<br />
<br />
<br />
<!--  header -->
<div class="row">
	<div class="eight columns">
	<div class="welcome">Welcome <b><%= user.getCurrentUser().getEmail() %></b></div>
	</div>
	<div class="four columns">
		<span class="logout"><a href="<%= user.createLogoutURL("http://www.siolabs.com/logout?ref=tambola-logout") %>">Logout</a></span>
	</div>
</div>

<!-- main body -->

<div class="row">
	<div class="eight columns">
	<!-- code here to tell the user about the rules and the button to start the game. -->
	</div>
	<div class="four columns">
	<!--  code here for advertisements or perks or leader board -->
	</div>
</div>


<!-- footer -->
<div class="row">
	<div class="twelve columns">
		<!-- get the footer here -->
	</div>
</div>



</body>
</html>