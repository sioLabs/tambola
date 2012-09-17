package com.siolabs.tambola;
/*
 * the numbers can be generated one time for a game 
 * and then it can send the numbers by checking the index.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.ArrayList;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




public class GetNumber extends HttpServlet {
	
	public GetNumber(){
		count = 1;
		Random rg  = new Random();
		while(count<90){
			int num = rg.nextInt(90)+1;
			if(!numbers.contains(num)){
				count++;
				numbers.add(num);
			}			
		}
	}
	
	public static int count = 0;
	public static ArrayList<Integer> numbers = new ArrayList<Integer>();
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		resp.setContentType("text/plain");
		String ind = req.getParameter("ind");
		int idx = Integer.parseInt(ind);
		PrintWriter out = resp.getWriter();
		out.println(numbers.toString());
		out.close();				
	}
}
