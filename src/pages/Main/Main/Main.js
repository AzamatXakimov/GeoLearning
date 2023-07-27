import React from 'react';
import mainImg from '../../../assets/images/main-img.svg';
import "./Main.scss"
import { Link } from 'react-router-dom';
export const Main = () => {
	return (
		<>
            <header className='main-header'>
                <div className="container">
                    <Link className='main-header-link' to="/">
                        GEO<span className='main-header-color-text'>Learning</span>
                    </Link>
                </div>
            </header>

            <main className='site-main'>
                <section className='main-hero'>
                    <div className="container">
                        <div className="main-hero-wrapper">
                            <div className='main-hero-textbox'>
                                <h1 className='main-hero-title'>
                                    GeoLearning
                                </h1>
                                <p className='main-hero-desc'>
                                    geolearning.uz geografik bilimlarni hammaga ochiq interaktiv modullar orqali o`rganish va o`qitishni qo`llab quvvatlash uchun mo`ljallangan. Ushbu geografik topshiriqlar onlayn tarzda yaratilgan va keyinchalik  o`quv jarayonida  qo`llanilishi mumkun.
                                    
                                    Veb sayt oliy talimda tahsil olayotgan geografiya ta`lim yo`nalishidagi talabalar va  fanga qiziquvchi foydalanuvchilar uchun ishlab chiqilgan.
                                </p>
                                <Link className='main-hero-link' to="/home">Asosiy oynaga o'tish</Link>
                            </div>
                            <img className='main-hero-img' src={mainImg} alt="Hero image" />
                        </div>
                    </div>
                </section>

                <section className='main-theme'>
                    <div className="container">
                        <h2 className='main-theme-title'>
                            Mavzular
                        </h2>
                        <div className='main-theme-box'>
                            <ul className='main-theme-list'>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/azimuth">
                                        Azimut
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/africa">
                                        Afrika
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/antarctica">
                                        Antarktida
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/atmosphere">
                                        Atmosfera
                                    </Link>
                                </li>
                            </ul>
                            <ul className='main-theme-list'>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/euro-asia">
                                        Yevro Osiyo
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/north-america">
                                        Shimoliy Amerika
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/south-america">
                                        Janubiy Amerika
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/pacific-ocean">
                                        Tinch Okeani
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/arctic-ocean">
                                        Shimoliy Muz Okeani
                                    </Link>
                                </li>
                            </ul>
                            <ul className='main-theme-list'>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/indian-ocean">
                                        Hind Okeani
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/biosphere">
                                        Biosfera
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/hydrosphere">
                                        Gidrosfera
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/universe">
                                        Koinot
                                    </Link>
                                </li>
                            </ul>
                            <ul className='main-theme-list'>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/oceans">
                                        Okeanlar
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/australia">
                                        Avstraliya
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/atlantic">
                                        Atlantika Okeani
                                    </Link>
                                </li>
                                <li className="main-theme-item">
                                    <Link className='main-theme-link' to="/home/sun-system">
                                        Quyosh sistemasi
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
		</>
	);
};