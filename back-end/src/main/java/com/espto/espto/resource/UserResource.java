package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.User;
import com.espto.espto.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(path = "user")
public class UserResource extends GenericResource<User, Long, UserService> {

    private final UserService userService;

    public UserResource(UserService service) {
        super(service);
        this.userService = service;
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<String> uploadProfilePicture(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            userService.uploadProfilePicture(id, file);
            return ResponseEntity.ok("Foto de perfil enviada com sucesso");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao enviar a foto de perfil");
        }
    }

    // Endpoint para obter a foto de perfil
    @GetMapping("/{id}/profile-picture")
    public ResponseEntity<byte[]> getProfilePicture(@PathVariable Long id) {
        byte[] image = userService.getProfilePicture(id);
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    @PostMapping("/follow-user/{userId}/{userIdFollow}")
    public void followUser(@PathVariable Long userId, @PathVariable Long userIdFollow) {
        userService.followUser(userId, userIdFollow);
    }

    @PostMapping("/unfollow-user/{userId}/{userIdUnfollow}")
    public void unfollowUser(@PathVariable Long userId, @PathVariable Long userIdUnfollow) {
        userService.unfollowUser(userId, userIdUnfollow);
    }


}
