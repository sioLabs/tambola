package com.siolabs.tambola;

import com.googlecode.objectify.ObjectifyFactory;
import entities.User;
import com.googlecode.objectify.*;


public class OfyService {
    static {
        factory().register(User.class);
               
    }

    public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }
}