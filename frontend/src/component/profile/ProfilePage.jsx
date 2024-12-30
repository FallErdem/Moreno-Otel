import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                // Fetch user bookings using the fetched user ID
                const userPlusBookings = await ApiService.getUserBookings(response.user.id);
                setUser(userPlusBookings.user)

            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        ApiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile-page">
            {user && <h2>☼Hoş Geldin, {user.name}</h2>}
            <div className="profile-actions">
                <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <h3>Hesap Bilgilerim</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Telefon Numaras:</strong> {user.phoneNumber}</p>
                </div>
            )}
            <div className="bookings-section">
                <h3>Rezervasyon Geçmişim</h3>
                <div className="booking-list">
                    {user && user.bookings.length > 0 ? (
                        user.bookings.map((booking) => (
                            <div key={booking.id} className="booking-item">
                                <p><strong>Rezervasyon Kodu:</strong> {booking.bookingConfirmationCode}</p>
                                <p><strong>Giriş Tarihi:</strong> {booking.checkInDate}</p>
                                <p><strong>Çıkış Tarihi:</strong> {booking.checkOutDate}</p>
                                <p><strong>Toplam Misafir Sayısı:</strong> {booking.totalNumOfGuest}</p>
                                <p><strong>Oda Tipi:</strong> {booking.room.roomType}</p>
                                <img src={booking.room.roomPhotoUrl} alt="Room" className="room-photo" />
                            </div>
                        ))
                    ) : (
                        <p>Rezervasyon bulunamadı.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
