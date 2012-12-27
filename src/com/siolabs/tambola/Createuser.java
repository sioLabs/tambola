package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

import entities.User;
import static com.siolabs.tambola.OfyService.ofy;


public class Createuser extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String pass = req.getParameter("passwd");
		
		User u = ofy().load().type(User.class).id(email).get();
		
		if(null != u){
			resp.sendRedirect("/index.jsp?status=001");
		}
		else{
			u = new User( email,name,pass);
			ofy().save().entity(u);
			HttpSession session = req.getSession();
	        if(session.isNew()){
	        	session.setAttribute("name", name);
	        	session.setAttribute("email", email);
	        }
	        resp.sendRedirect("/auth/home.jsp");
			
		}
		
		
		
		
}

}
