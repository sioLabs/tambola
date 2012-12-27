package entities;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Ignore;

@Entity
public class User {
	@Id @Index String email;
	
	public String name;
	public String password;
	
	// no arg constructor so that it can be used by objectify 
	public User(){
		
	}
	
	public User(String email, String name, String pass){
		this.email = email;
		this.name  = name;
		this.password = pass;
		
		
	}

}
