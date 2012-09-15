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
  <link rel="stylesheet" href="stylesheets/foundation.min.css">
  <link rel="stylesheet" href="stylesheets/app.css">
  <link href='http://fonts.googleapis.com/css?family=Skranji' rel='stylesheet' type='text/css'>
  
  <script src="javascripts/modernizr.foundation.js"></script>

  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</head>
<body>

  <div class="row">
    <div class="twelve columns">
      <h2>Welcome to Online Tambola</h2>
      <p>This is version <strong>0.1</strong> generated on September 14, 2012.</p>
      <hr />
    </div>
  </div>

  <div class="row">
    <div class="eight columns">
      <h3>The Grid</h3>

      <!-- Grid Example -->
      <div class="row">
        <div class="twelve columns">
          <div class="panel">
            <p>This is a twelve column section in a row. Each of these includes a div.panel element so you can see where the columns are - it's not required at all for the grid.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="six columns">
          <div class="panel">
            <p>Six columns</p>
          </div>
        </div>
        <div class="six columns">
          <div class="panel">
            <p>Six columns</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="four columns">
          <div class="panel">
            <p>Four columns</p>
          </div>
        </div>
        <div class="four columns">
          <div class="panel">
            <p>Four columns</p>
          </div>
        </div>
        <div class="four columns">
          <div class="panel">
            <p>Four columns</p>
          </div>
        </div>
      </div>
      
      
      <h3>Tabs</h3>
      <dl class="tabs">
        <dd class="active"><a href="#simple1">Simple Tab 1</a></dd>
        <dd><a href="#simple2">Simple Tab 2</a></dd>
        <dd><a href="#simple3">Simple Tab 3</a></dd>
      </dl>

      <ul class="tabs-content">
        <li class="active" id="simple1Tab">This is simple tab 1's content. Pretty neat, huh?</li>
        <li id="simple2Tab">This is simple tab 2's content. Now you see it!</li>
        <li id="simple3Tab">This is simple tab 3's content. It's, you know...okay.</li>
      </ul>
      
      
      
      <h3>Buttons</h3>

      <div class="row">
        <div class="six columns">
          <p><a href="#" class="small button">Small Button</a></p>
          <p><a href="#" class="button">Medium Button</a></p>
          <p><a href="#" class="large button">Large Button</a></p>
        </div>
        <div class="six columns">
          <p><a href="#" class="small alert button">Small Alert Button</a></p>
          <p><a href="#" class="success button">Medium Success Button</a></p>
          <p><a href="#" class="large secondary button">Large Secondary Button</a></p>
        </div>
      </div>
      
    </div>

    <div class="four columns">
      <h4>Getting Started</h4>
      <p>We're stoked you want to play the tambola. Simply register here using your email id and start playing.</p>
      <hr />
      <%!    UserService userService = UserServiceFactory.getUserService();%>
      
      <a href="<%= userService.createLoginURL(request.getRequestURI()) %>" class="medium round button">Login</a>
      
    </div>
  </div>

  
  <div class="row">
    <div class="twelve columns">
      <h3>Orbit</h3>
      <div id="featured">
        <img src="http://placehold.it/1200x250&text=Slide_1" alt="slide image">
        <img src="http://placehold.it/1200x250&text=Slide_2" alt="slide image">
        <img src="http://placehold.it/1200x250&text=Slide_3" alt="slide image">
      </div>
    </div>
  </div>
  
  
  
  <div class="row">
    <div class="twelve columns">
      <h3>Reveal</h3>
      <p><a href="#" data-reveal-id="exampleModal" class="button">Example modal</a></p>
    </div>
  </div>
  
  <div id="exampleModal" class="reveal-modal">
    <h2>This is a modal.</h2>
    <p>
      Reveal makes these very easy to summon and dismiss. The close button is simple an anchor with a unicode 
      character icon and a class of <code>close-reveal-modal</code>. Clicking anywhere outside the modal will 
      also dismiss it.
    </p>
    <a class="close-reveal-modal">Ã</a>
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
  <script src="javascripts/foundation.min.js"></script>
  
  <!-- Initialize JS Plugins -->
  <script src="javascripts/app.js"></script>
</body>
</html>
