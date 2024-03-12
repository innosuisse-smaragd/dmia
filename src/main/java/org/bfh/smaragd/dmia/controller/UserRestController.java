package org.bfh.smaragd.dmia.controller;

import lombok.AllArgsConstructor;
import org.bfh.smaragd.dmia.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserRestController {

    private final UserService userService;

    @GetMapping("/exist")
    public boolean exist(@RequestParam String fullName) {
        return userService.exist(fullName);
    }
}
