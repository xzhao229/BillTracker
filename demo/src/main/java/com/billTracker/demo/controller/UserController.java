package com.billTracker.demo.controller;
import com.billTracker.demo.model.User;
import com.billTracker.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class UserController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    @PostMapping(path="/signin") // Map ONLY POST Requests
    public ResponseEntity<String> login (@RequestBody Map<String, String> loginInfo) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        User user = userRepository.findByEmail(loginInfo.get("email"));
        if (user != null) {
            // check password and return bills or error
            if (!loginInfo.get("password").equals(user.getpassword())) {
                return new ResponseEntity<>(
                        "Wrong password",
                        HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>("Success", HttpStatus.OK);
            }
        } else {
            // user not found, need to correct login info
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path="/signup") // Map ONLY POST Requests
    public ResponseEntity<String> signup (@RequestBody Map<String, String> signupInfo) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        // check if email already exists
        User user = userRepository.findByEmail(signupInfo.get("email"));
        if (user != null) {
            // email exists
            return new ResponseEntity<>(
                    "Email exists",
                    HttpStatus.BAD_REQUEST);
        }
        User n = new User();
        n.setEmail(signupInfo.get("email"));
        n.setUsername(signupInfo.get("username"));
        n.setpassword(signupInfo.get("password"));
        userRepository.save(n);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path="/success")
    public @ResponseBody String getwhatIadded(){
        return "saved";
    }
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }
}