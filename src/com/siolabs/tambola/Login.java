package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Entity;



public class Login extends HttpServlet {
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		String email = req.getParameter("email");
		String pass = req.getParameter("passwd");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
	    Key key = KeyFactory.createKey("email",email );
	    
	    
	    try {
			Entity user = datastore.get(key);
			if(user.getProperty("passwd").equals(pass));
			resp.sendRedirect("/auth/home.jsp?uname="+user.getProperty("name"));
			
		} catch (EntityNotFoundException e) {
			// TODO code to redirect the user to index.jsp with invalid username/password
			resp.sendRedirect("/index.jsp?status=000");
			
		}
		
		
	}

}
