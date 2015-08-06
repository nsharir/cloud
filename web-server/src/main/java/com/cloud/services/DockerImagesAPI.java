package com.cloud.services;

import com.cloud.content.ContentReaderUtils;
import com.cloud.model.dockerImages.DockerImage;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/dockerImage")
public class DockerImagesAPI {

    @GET
    @Path("list")
    @Produces(MediaType.APPLICATION_JSON)
    public String list() {


        List<DockerImage> dockerImages = ContentReaderUtils.readContentFolder("/com/cloud/sample/dockerImages", DockerImage.class);

        Gson gson = new GsonBuilder().create();
        return gson.toJson(dockerImages);
    }

}
