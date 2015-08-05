package com.cloud.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/demo")
public class demoAPI {

    @GET
    @Path("test")
    @Produces(MediaType.APPLICATION_JSON)
    public Resp test() {
        return new Resp();
    }


    public static class Resp {
        public String templateName = "aaa";
        public int version = 1;
    }
}
