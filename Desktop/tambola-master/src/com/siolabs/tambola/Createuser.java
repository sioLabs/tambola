package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.FilterPredicate;

public class Createuser extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String pass = req.getParameter("passwd");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Key userKey =  KeyFactory.createKey("User",email);
		System.out.println(userKey.getId()+" "+userKey.getKind()+" "+userKey.getName());
		
		//create an email filter to check if already exists
		Filter emailfil = new FilterPredicate("email",FilterOperator.EQUAL,email);
		
		Query q = new Query("User").setFilter(emailfil);
		PreparedQuery pq = datastore.prepare(q);

		if(pq.asIterator().hasNext())
		{
			resp.sendRedirect("/index.jsp?status=001");
		} else {
			// TODO Auto-generated catch block
			Entity user = new Entity("User",userKey);
			user.setProperty("name", name);
			user.setProperty("passwd", pass);
			user.setProperty("email", email);
	        datastore.put(user);
	        
	        HttpSession session = req.getSession();
	        if(session.isNew()){
	        	session.setAttribute("uname", name);
	        	session.setAttribute("email", email);
	        }
	        resp.sendRedirect("/auth/home.jsp");
			
		}
		
		
		
		
		
}

}
