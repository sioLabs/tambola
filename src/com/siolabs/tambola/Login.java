package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
	    Key key = KeyFactory.createKey("User",email );
	   
	    System.out.println(key.getId()+" "+key.getKind()+" "+key.getName());
	    
	    
	    
	    try {
			Entity user = datastore.get(key);
			System.out.println(pass+" "+user.getProperty("passwd"));
			if(user.getProperty("passwd").equals(pass));{
				HttpSession session = req.getSession();
			    if(session.isNew()){
			       	session.setAttribute("uname", user.getProperty("name"));
			       	session.setAttribute("email", email);
			    }
			resp.sendRedirect("/auth/home.jsp");
			
			}
			
		} catch (EntityNotFoundException e) {
			// TODO code to redirect the user to index.jsp with invalid username/password
			resp.sendRedirect("/index.jsp?status=000");
			
		}
		
		
	}

}
