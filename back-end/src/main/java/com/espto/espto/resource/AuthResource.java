package com.espto.espto.resource;

import com.espto.espto.domain.LoginCredentials;
import com.espto.espto.domain.User;
import com.espto.espto.exception.BusinessException;
import com.espto.espto.repository.UserRepository;
import com.espto.espto.security.JwtTokenUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = "auth")
public class AuthResource {

    private final UserRepository userRepo;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authManager;
    private final PasswordEncoder passwordEncoder;

    public AuthResource(UserRepository userRepo, JwtTokenUtil jwtTokenUtil, AuthenticationManager authManager, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authManager = authManager;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("register")
    public ResponseEntity<Map<String, Object>> registerHandler(@RequestBody User user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent())
            throw new BusinessException("Email is alrealy in used");

        var encodedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPass);
        user = userRepo.save(user);
        var token = jwtTokenUtil.generateToken(user.getEmail());

        var paramsReturn = new HashMap<String, Object>();
        paramsReturn.put("token", token);
        paramsReturn.put("user", user);
        return ResponseEntity.ok(paramsReturn);
    }

    @PostMapping("login")
    public Map<String, Object> loginHandler(@RequestBody LoginCredentials body) {
        try {
            var authInputToken = new UsernamePasswordAuthenticationToken(body.getEmail(), body.getPassword());
            authManager.authenticate(authInputToken);
            var token = jwtTokenUtil.generateToken(body.getEmail());

            var paramsReturn = new HashMap<String, Object>();
            paramsReturn.put("token", token);
            paramsReturn.put("user", userRepo.findByEmail(body.getEmail()).orElse(null));

            return paramsReturn;

        } catch (AuthenticationException authExc) {
            throw new BusinessException("Invalid Login Credentials");
        }
    }


}