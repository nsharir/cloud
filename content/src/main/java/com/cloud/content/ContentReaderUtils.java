package com.cloud.content;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.FileFilter;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nadav on 8/6/2015.
 */
public class ContentReaderUtils {

    public  static <T> List<T> readContentFolder(String path, Class<T> type) {

        URL resourceURL = ContentReaderUtils.class.getResource(path);

        File file = null;
        try {
            file = new File(resourceURL.toURI());
        } catch (URISyntaxException e) {
            throw new RuntimeException("Unable to locate resource : "+resourceURL);
        }

        if (!file.isDirectory()){
            throw new RuntimeException(file.getAbsolutePath()+" is not a folder.");
        }

        File[] files = file.listFiles(new FileFilter() {
            public boolean accept(File pathname) {
                return !pathname.isDirectory();
            }
        });

        List<T> resources = new ArrayList<T>(files.length);

        Gson gson = new GsonBuilder().create();


        for (File resourceFile : files) {
            try {
                String json = FileUtils.readFileToString(resourceFile, "UTF-8");
                T resource = gson.fromJson(json, type);
                resources.add(resource);
            } catch (IOException e) {
                throw new RuntimeException("Unable to read file "+resourceFile.getAbsolutePath());
            }

        }

        return resources;

    }
}
