package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import entities.User;
import static com.siolabs.tambola.OfyService.ofy;




public class Login extends HttpServlet {
	
	
	
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		
		String email = req.getParameter("email");
		String pass = req.getParameter("passwd");
		
		System.out.println(email+"  "+pass);
		User u = ofy().load().type(User.class).id(email).get();
		
		
		// if the user is not found then do this 
		if(null == u ){
			System.out.println("no user found");
			resp.sendRedirect("/index.jsp?status=000");
		}
		else{
			//the user is found match the password
			System.out.println("some found");
			if(u.password.equals(pass)){
				System.out.println("pass match");
				HttpSession session = req.getSession();
				
			    
			       	session.setAttribute("name", u.name);
			       	session.setAttribute("email", email);
			    
			    resp.sendRedirect("/auth/home.jsp");
			
			}
			else{
				System.out.println("pass not match");
				resp.sendRedirect("/index.jsp?status=000");
			}				
			
		} 
		
		
	}

}
