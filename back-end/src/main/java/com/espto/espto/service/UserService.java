package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.User;
import com.espto.espto.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.Optional;

@Service
public class UserService extends GenericService<User, Long, UserRepository> {

    private final UserRepository userRepository;
    private final FollowerService followerService;
    private final FollowingService followingService;

    public UserService(UserRepository userRepository, FollowingService followingService, FollowerService followerService) {
        super(userRepository);
        this.userRepository = userRepository;
        this.followingService = followingService;
        this.followerService = followerService;
    }

    @Override
    public Optional<User> findById(Long aLong) {
        Optional<User> user = super.findById(aLong);

        user.ifPresent(user1 -> {
            user1.setFollowers(followerService.findAllByUser(user1));
            user1.setFollowing(followingService.findAllByUser(user1));
        });

        return user;
    }

    public void uploadProfilePicture(Long userId, MultipartFile file) throws IOException {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
//            user.setProfilePicture(file.getBytes());
            userRepository.save(user);
        } else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public byte[] getProfilePicture(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            return optionalUser.get().getProfilePicture();
        } else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    @Transactional
    public void followUser(Long userId, Long userIdFollow) {
        var user = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        var userFollow = userRepository.findById(userIdFollow).orElseThrow(EntityNotFoundException::new);
        followerService.followerUser(userFollow, user);
        followingService.followingUser(user, userFollow);
    }

    @Transactional
    public void unfollowUser(Long userId, Long userIdUnFollow) {
        var user = userRepository.findById(userId).orElseThrow(EntityNotFoundException::new);
        var userUnfollow = userRepository.findById(userIdUnFollow).orElseThrow(EntityNotFoundException::new);
        followerService.removeFollower(user, userUnfollow);
        followingService.removeFollowing(user, userUnfollow);
    }

}
