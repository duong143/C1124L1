import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "./TrackDetailPage.css";

function TrackDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/songs/${id}`);
                setSong(res.data);
            } catch (error) {
                setError("Không tìm thấy bài hát.");
                console.error("Lỗi khi tải chi tiết bài hát:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSong();
    }, [id]);

    if (loading) {
        return <div className="track-page-loading">Đang tải...</div>;
    }

    if (error || !song) {
        return (
            <div className="track-page-error">
                <p>{error || "Bài hát không tồn tại."}</p>
                <button onClick={() => navigate("/home")}>← Quay lại</button>
            </div>
        );
    }

    return (
        <div className="track-page-parent">
            <div className="track-page-header">
                <button className="track-page-back" onClick={() => navigate("/home")}>
                    ← Quay về
                </button>
            </div>

            <div className="track-page-content">
                <img
                    src={require(`../../assets/${song.cover}`)}
                    alt={song.title}
                    className="track-page-cover"
                />
                <div className="track-page-info">
                    <h2 className="track-title">{song.title}</h2>
                    <p><strong>Ca sĩ:</strong> {song.artist}</p>
                    <p><strong>Album:</strong> {song.album || "Chưa rõ"}</p>
                </div>
            </div>


        </div>
    );
}

export default TrackDetailPage;
