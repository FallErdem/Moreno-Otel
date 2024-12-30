import React from 'react';
import { Link } from 'react-router-dom';

const BookingResult = ({ bookingSearchResults }) => {
  return (
    <div className="booking-results">
      {bookingSearchResults.map((booking) => (
        <div key={booking.id} className="booking-result-item">
          <p>Oda ID: {booking.roomId}</p>
          <p>Kullanıcı ID: {booking.userId}</p>
          <p>Başlangıç: {booking.startDate}</p>
          <p>Bitiş: {booking.endDate}</p>
          <p>Durum: {booking.status}</p>
          <Link to={`/admin/edit-booking/${booking.id}`} className="edit-link">Düzenle</Link>
        </div>
      ))}
    </div>
  );
};

export default BookingResult;
