<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--<html class="no-js" lang="en"> --><!--<![endif]-->

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
  
  <script src="/javascripts/modernizr.foundation.js"></script>
  
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

<br />
<br />
<br />
<!--  header -->
<div class="row">
	<div class="eight columns">
	<div class="welcome">Welcome <b><%= session.getAttribute("name") %></b></div>
	</div>
	<div class="four columns">
		<span class="logout"><a href="#">Logout</a></span>
	</div>
</div>

<!-- main body -->

<div class="row">
	<div class="eight columns">
	<br />
	<p>Here is your ticket. Whenever the number appears on your screen and that number
	is present in your ticket click on that number so that it will be striked.</p>
	<p>If you complete a pattern click on the button "WIN". If you have striked the right
	numbers. You will get a confirmation.</p>
	<h5>Enjoy Playing.</h5>
	
	<div id="textNextNum" >The Next number is : <span id="nextNum"></span></div>
	<br />	
	 	
	<table border="1">
	<%
		for(int i=1;i<4;i++){
			out.println("<tr>");
			for(int j=1;j<11;j++){
				 //Create a table here. 3x10 1<table> tag 3 <tr> tag 10 <td> tag
		     out.println("<td id=\""+i+"_"+j+"\" class=\"num\"></td>");
			}out.println("</tr>"); 
		}
	%>
	</table>
	
	</div>
	
	<div class="four columns">
		<div id="TopRow" class=" medium blue button twelve columns">Top Row</div><br/><br/><br />
		<div id="MiddleRow" class=" medium blue button twelve columns">Middle Row</div><br/><br/><br/>
		<div id="BottomRow" class=" medium blue button twelve columns">Bottom Row</div><br/><br/>
	</div>
</div>

<!-- footer -->

<div class="row">
	<div class="twelve columns links">
		<!-- get the footer here -->
		<hr />
		<a href = "https://github.com/sioLabs/tambola#readme">About</a>
		<a href = "http://facebook.com/t0m.ashu">Team</a>
		<a href = "http://blog.siolabs.com">Blog</a>
		<a href = "http://siolabs.github.com/tambola">Source Code</a>
	</div>
</div>

<div id = "testValue"></div>
<div id = "testValue2"></div>
<div id = "testValue3"></div>

<script src="/javascripts/jquery.js"></script>
<script src="/javascripts/tambola.js"></script>
 
</body>
</html>

