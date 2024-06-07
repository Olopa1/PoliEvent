package com.example.polievent.DTO;

public class UserPostRequest {
    private Long postId;
    private Integer userId;
    public Long getPostId() {
        return postId;
    }
    public void setPostId(Long postId) {
        this.postId = postId;
    }
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

}
