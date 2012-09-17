package com.siolabs.tambola;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class Createuser extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String pass = req.getParameter("passwd");
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Key userKey =  KeyFactory.createKey("uEmail", email);
		
		try {
			Entity userCheck = datastore.get(userKey);
			resp.sendRedirect("/index.jsp?status=001");
		} catch (EntityNotFoundException e) {
			// TODO Auto-generated catch block
			System.out.print("Exception generated");
			Entity user = new Entity("User",userKey);
			user.setProperty("name", name);
			user.setProperty("passwd", pass);
			user.setProperty("email", email);
	        
	        datastore.put(user);
	        resp.sendRedirect("/auth/home.jsp?uname="+name);
			
		}
		
		
		
		
		
}

}
