import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ApiService from '../../service/ApiService';

const RoomSearch = ({ handleSearchResult }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomType, setRoomType] = useState('');
  const [roomTypes, setRoomTypes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const types = await ApiService.getRoomTypes();
        setRoomTypes(types);
      } catch (error) {
        console.error('Oda türleri yüklenirken hata meydana geldi:', error.message);
      }
    };
    fetchRoomTypes();
  }, []);

  /**This methods is going to be used to show errors */
  const showError = (message, timeout = 5000) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, timeout);
  };

  /**THis is going to be used to fetch avaailabe rooms from database base on seach data that'll be passed in */
  const handleInternalSearch = async () => {
    if (!startDate || !endDate || !roomType) {
      showError('Lütfen tüm alanları doldurunuz');
      return false;
    }
    try {
      // Convert startDate to the desired format
      const formattedStartDate = startDate ? startDate.toISOString().split('T')[0] : null;
      const formattedEndDate = endDate ? endDate.toISOString().split('T')[0] : null;
      // Call the API to fetch available rooms
      const response = await ApiService.getAvailableRoomsByDateAndType(formattedStartDate, formattedEndDate, roomType);

      // Check if the response is successful
      if (response.statusCode === 200) {
        if (response.roomList.length === 0) {
          showError('Bu tarih aralığında, seçilen oda tipi için uygun oda bulunmamaktadır.');
          return
        }
        handleSearchResult(response.roomList);
        setError('');
      }
    } catch (error) {
      showError("Bilinmeyen bir hata oluştu: " + error.response.data.message);
    }
  };

  return (
    <section>
      <div className="search-container">
        <div className="search-field">
          <label>Giriş Tarihi</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Giriş tarihini seçiniz.."
          />
        </div>
        <div className="search-field">
          <label>Çıkış Tarihi</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Çıkış tarihini seçiniz.."
          />
        </div>

        <div className="search-field">
          <label>Oda Tipi</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option disabled value="">
              Oda tipi seçin..
            </option>
            {roomTypes.map((roomType) => (
              <option key={roomType} value={roomType}>
                {roomType}
              </option>
            ))}
          </select>
        </div>
        <button className="home-search-button" onClick={handleInternalSearch}>
          Oda Ara
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default RoomSearch;
