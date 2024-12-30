import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

const EditProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setUser(response.user);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleDeleteProfile = async () => {
        if (!window.confirm('Hesabınızı silmek istediğinizden emin misiniz?')) {
            return;
        }
        try {
            await ApiService.deleteUser(user.id);
            navigate('/signup');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="edit-profile-page">
            <h2>Profili Düzenle</h2>
            {error && <p className="error-message">{error}</p>}
            {user && (
                <div className="profile-details">
                    <p><strong>Ad:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Telefon Numarası:</strong> {user.phoneNumber}</p>
                    <button className="delete-profile-button" onClick={handleDeleteProfile}>Hesabı Sil</button>
                </div>
            )}
        </div>
    );
};

export default EditProfilePage;
