import React, {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import {Link} from "react-router-dom";
import spotifyLogo from "../../assets/spotify-logo.png";
import userAvatar from "../../assets/user-avatar.jpg";


function HomePage() {
    const [showSearch, setShowSearch] = useState(false);
    const [songs, setSongs] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/songs");
                setSongs(res.data);
            } catch (error) {
                console.error("Lỗi khi tải bài hát:", error);
            }
        };

        fetchSongs();
    }, []);

    const handleLogout = () => {
        navigate("/login");
    };


    return (
        <div className="parent">
            <div className="div1">
                <h2 className="sidebar-title">Your Library</h2>

                <button className="search-toggle" onClick={() => setShowSearch(!showSearch)}>
                    <FaSearch/>
                </button>

                {showSearch && (
                    <input
                        type="text"
                        placeholder="Search..."
                        className="sidebar-search"
                    />
                )}

                <ul className="sidebar-list">
                    {songs.map((song, index) => (
                        <li key={index} className="sidebar-item">
                            <div className="sidebar-img-wrapper">
                                <img
                                    src={require(`../../assets/${song.cover}`)}
                                    alt={song.title}
                                    className="sidebar-img"
                                />
                                <div className="play-overlay">▶</div>
                            </div>
                            <span className="sidebar-title-text">{song.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="div2">
                <div className="nav-left">
                    <img src={spotifyLogo} alt="Spotify" className="logo"/>
                    <div className="search-bar-container">
                        <input type="text" placeholder="What do you want to play?" className="search-bar"/>
                        <span className="search-icon"></span>
                    </div>
                </div>

                <div className="nav-right">
                    <div className="avatar-container" onClick={() => setShowMenu(!showMenu)}>
                        <img src={userAvatar} alt="User" className="user-avatar"/>
                        {showMenu && (
                            <div className="user-menu">
                                <div className="menu-item">Thông tin cá nhân</div>
                                <div className="menu-item">Bài hát yêu thích</div>
                                <div className="menu-item" onClick={handleLogout}>Đăng xuất</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="div3">
                <h2 className="section-title">Popular albums and singles</h2>
                <div className="song-grid">
                    {songs.map((song) => (
                        <div className="song-card" key={song.id} onClick={() => navigate(`/track/${song.id}`)}>
                            <img
                                src={require(`../../assets/${song.cover}`)}
                                alt={song.title}
                                className="song-cover"
                            />
                            <div className="song-info">
                                <p className="song-title">{song.title}</p>
                                <p className="song-artist">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
