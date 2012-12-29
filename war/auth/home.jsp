<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ page import="com.google.appengine.api.users.User"%>
<%@ page import="com.google.appengine.api.users.UserService"%>
<%@ page import="com.google.appengine.api.users.UserServiceFactory"%>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<html>
<head>
<title>Welcome to online tambola | Play the game</title>
<!-- Included CSS Files (Compressed) -->
<link rel="stylesheet" href="/stylesheets/foundation.min.css">
<link rel="stylesheet" href="/stylesheets/app.css">
<link rel="stylesheet" href="/stylesheets/tambola.css">
<link href='http://fonts.googleapis.com/css?family=Skranji'
	rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Life+Savers'
	rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Bubbler+One'
	rel='stylesheet' type='text/css'>



<!-- IE Fix for HTML5 Tags -->
<!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

	<%
	if(session.getAttribute("name") == null)
		response.sendRedirect("/index.jsp?status=002");
%>

	<br />
	<br />
	<br />
	<!--  header -->
	<div class="row">
		<div class="eight columns">
			<div class="welcome">
				Welcome <b><%= session.getAttribute("name") %></b>
			</div>
		</div>
		<div class="four columns">
			<span class="logout"><a href="/logout">Logout</a>
			</span>
		</div>
	</div>

	<!-- main body -->

	<div class="row">
		<div id="body-left" class="eight columns body-left">
			<!-- code here to tell the user about the rules and the button to start the game. -->
			Hi, there
			<p>Tambola is game of luck and your responsiveness.You will be
				presented with a 3x10 grid which will contain 15 numbers. Every 10
				seconds you will be presented with a number. If that number is on
				your grid. Click on the cell of the grid to strike out that number.

			</p>
			<p>There are 5 patterns to find on your grid making you eligible
				of a prize.
			<ul>
				<li>Top Row</li>
				<li>Middle Row</li>
				<li>Bottom Row</li>
				<li>Corner Numbers</li>
				<li>Full House</li>
			</ul>

			</p>
			<a id="demo" class="medium button blue">View Demo</a> 
			<a id="play" class="medium button blue"	href="game.jsp?name=<%=session.getAttribute("name")%>">Start Playing</a>
		</div>


		<div class="four columns">
			<!--  code here for advertisements or perks or leader board -->

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

	<script src="/javascripts/jquery.js"></script>
		<script src="/javascripts/modernizr.foundation.js"></script>

</body>
</html>