import React, { useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js

const FindBookingPage = () => {
    const [confirmationCode, setConfirmationCode] = useState(''); // State variable for confirmation code
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors

    const handleSearch = async () => {
        if (!confirmationCode.trim()) {
            setError("Lütfen bir rezervasyon onay kodu girin");
            setTimeout(() => setError(''), 5000);
            return;
        }
        try {
            // Call API to get booking details
            const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
            setBookingDetails(response.booking);
            setError(null); // Clear error if successful
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="find-booking-page">
            <h2>Rezervasyonu Bul</h2>
            <div className="search-container">
                <input
                    required
                    type="text"
                    placeholder="Rezervasyon onay kodunuzu girin"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                />
                <button onClick={handleSearch}>Ara</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {bookingDetails && (
                <div className="booking-details">
                    <h3>Rezervasyon Detayları</h3>
                    <p>Onay Kodu: {bookingDetails.bookingConfirmationCode}</p>
                    <p>Giriş Tarihi: {bookingDetails.checkInDate}</p>
                    <p>Çıkış Tarihi: {bookingDetails.checkOutDate}</p>
                    <p>Yetişkin Sayısı: {bookingDetails.numOfAdults}</p>
                    <p>Çocuk Sayısı: {bookingDetails.numOfChildren}</p>

                    <br />
                    <hr />
                    <br />
                    <h3>Rezervasyonu Yapan Kişi Detayları</h3>
                    <div>
                        <p> İsim: {bookingDetails.user.name}</p>
                        <p> Email: {bookingDetails.user.email}</p>
                        <p> Telefon Numarası: {bookingDetails.user.phoneNumber}</p>
                    </div>

                    <br />
                    <hr />
                    <br />
                    <h3>Oda Detayları</h3>
                    <div>
                        <p> Oda Tipi: {bookingDetails.room.roomType}</p>
                        <img src={bookingDetails.room.roomPhotoUrl} alt="" sizes="" srcSet="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindBookingPage;
