import React, { useState, useEffect } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [roomSearchResults, setRoomSearchResults] = useState([]);

    const images = [
        "./assets/images/otelphoto.png",
        "./assets/images/otelphoto2.png",
        "./assets/images/otelphoto3.png",
        "./assets/images/otelphoto4.png",
        "./assets/images/otelphoto5.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // 3 saniyede bir geçiş

        return () => clearInterval(interval); // Interval temizleme
    }, [images.length]);

    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    <img
                        src={images[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        className="header-image"
                    />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Moreno Otel'e <span className="moreno-color">Hoş Geldiniz</span>
                        </h1><br />
                        <h3>Konfor ve ilginin buluştuğu bir cennete adım atın.</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
            <RoomSearch handleSearchResult={handleSearchResult} />
            <RoomResult roomSearchResults={roomSearchResults} />

            <h4><a className="view-rooms-home" href="/rooms">Tüm Odalar</a></h4>

            <h2 className="home-services">OLANAKLARIMIZ</h2>

            {/* SERVICES SECTION */}
            <section className="service-section">
                <div className="service-card">
                    <img src="./assets/images/link.png" alt="Bağlantılı Odalar(wi-Fi)" />
                    <div className="service-details">
                        <h3 className="service-title">Bağlantılı Odalar</h3>
                        <p className="service-description">Otelimizdeki tüm odalarda ücretsiz ve yüksek hızlı Wi-Fi erişimi sağlanmaktadır. Misafirlerimiz, odalar arasında kesintisiz internet bağlantısının keyfini çıkarabilirler.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/park.png" alt="Ücretsiz Park" />
                    <div className="service-details">
                        <h3 className="service-title">Ücretsiz Park</h3>
                        <p className="service-description">Otel misafirlerine ücretsiz otopark hizmeti sunulmaktadır. Konaklamanız boyunca aracınızı güvenle park edebilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/no-smoke.png" alt="Sigara içilmeyen odalar" />
                    <div className="service-details">
                        <h3 className="service-title">Sigara İçilmeyen Odalar</h3>
                        <p className="service-description">Sigara içmeyen misafirler için özel olarak tasarlanmış odalarımızda, taze hava ve temizlik garantisi sunulmaktadır.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/spa.png" alt="Spa" />
                    <div className="service-details">
                        <h3 className="service-title">Spa</h3>
                        <p className="service-description">Konaklamanızı daha rahat ve dinlendirici hale getirecek spa hizmetlerimiz ile stresten arınabilir, rahatlatıcı masajlardan faydalanabilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/lounge.png" alt="Executive lounge" />
                    <div className="service-details">
                        <h3 className="service-title">Executive Lounge</h3>
                        <p className="service-description">İş dünyasından misafirlerimize özel olarak sunulan executive lounge, rahat bir ortamda çalışmak ve dinlenmek için ideal bir alan sağlar.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/restaurant.png" alt="Tesis İçi Restoran" />
                    <div className="service-details">
                        <h3 className="service-title">Tesis İçi Restorant</h3>
                        <p className="service-description">Yiyecek ve içecek ihtiyacınız için otel içinde hizmet veren restoranımızda zengin bir menü ve rahat bir ortamda keyifli bir yemek deneyimi sunulmaktadır.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/pool.png" alt="Kapalı Havuz" />
                    <div className="service-details">
                        <h3 className="service-title">Kapalı Havuz</h3>
                        <p className="service-description">Yıl boyu hizmet veren kapalı havuzumuzda yüzme keyfini çıkarabilirsiniz. Hava koşullarından bağımsız olarak rahatça yüzebilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/fitness.png" alt="Fitness Merkezi" />
                    <div className="service-details">
                        <h3 className="service-title">Fitness Merkezi</h3>
                        <p className="service-description">Sağlıklı yaşamı destekleyen fitness merkezimizde, konaklamanız süresince formda kalmak için çeşitli egzersiz imkanları mevcuttur</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/room_service.png" alt="Oda Servisi" />
                    <div className="service-details">
                        <h3 className="service-title">Oda Servisi</h3>
                        <p className="service-description">Odanızda rahatça dinlenirken yemek veya içecek taleplerinizi odamdan ayrılmadan karşılayabilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/work.png" alt="İş Merkezi" />
                    <div className="service-details">
                        <h3 className="service-title">İş Merkezi</h3>
                        <p className="service-description">Otelimizdeki iş merkezi, iş amaçlı seyahat eden misafirlerimiz için modern ofis donanımlarıyla donatılmıştır. Çalışma ihtiyaçlarınızı kolayca karşılayabilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/meeting.png" alt="Toplantı Odaları" />
                    <div className="service-details">
                        <h3 className="service-title">Toplantı Odaları</h3>
                        <p className="service-description">İş toplantıları, seminerler ve özel etkinlikler için geniş, donanımlı toplantı odalarımızda profesyonel hizmet alabilirsiniz.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/no-pets.png" alt="Evcil hayvanlara izin verilmez" />
                    <div className="service-details">
                        <h3 className="service-title">Evcil Hayvanlara izin Verilmez</h3>
                        <p className="service-description">Evcil hayvanlarınızı yanınıza alamazsınız. Otelimiz, misafirlerinin rahatını ve güvenliğini sağlamak amacıyla evcil hayvan kabul etmemektedir.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;