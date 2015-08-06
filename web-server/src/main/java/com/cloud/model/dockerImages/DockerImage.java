package com.cloud.model.dockerImages;

/**
 * Created by Nadav on 8/5/2015.
 */
public class DockerImage {

    public String name;
    public String version;
    public String category;
    public String ref;

    public DockerImage(String name, String version, String category, String ref) {
        this.name = name;
        this.version = version;
        this.category = category;
        this.ref = ref;
    }


}
