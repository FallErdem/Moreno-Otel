package com.moreno.MorenOtel.service.interfac;

import com.moreno.MorenOtel.dto.Response;
import com.moreno.MorenOtel.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long rooId, Long userId, Booking bookingRequest);
    Response findBookingByConfirmationCode(String confirmationCode);
    Response getAllBookings();
    Response cancelBooking(Long bookingId);
}