package org.bfh.smaragd.dmia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class HelloWorldRestController {

    @GetMapping("/hello")
    public String getHello(){
        return "Hello World!";
    }
}
