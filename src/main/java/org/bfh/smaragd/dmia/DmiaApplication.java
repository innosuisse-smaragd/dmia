package org.bfh.smaragd.dmia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DmiaApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(DmiaApplication.class, args);
    }

}
