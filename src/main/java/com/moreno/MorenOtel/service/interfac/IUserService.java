package com.moreno.MorenOtel.service.interfac;

import com.moreno.MorenOtel.dto.LoginRequest;
import com.moreno.MorenOtel.dto.Response;
import com.moreno.MorenOtel.entity.User;

public interface IUserService {

    Response register(User user);
    Response login(LoginRequest loginRequest);
    Response getAllUsers();
    Response getUSerBookingHistory(String userId);
    Response deleteUser(String userId);
    Response getUserById(String userId);
    Response getMyInfo(String email);
}