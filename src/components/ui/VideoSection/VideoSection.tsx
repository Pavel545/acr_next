'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './VideoSection.module.css';

interface Props {
  videoSrc?: string;
  id?: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean; // для приоритетной загрузки
}

export const VideoSection: React.FC<Props> = ({
  videoSrc,
  id,
  poster,
  className = '',
  children,
  priority = false
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const handleError = () => {
      setIsVideoError(true);
      console.error('Ошибка загрузки видео:', videoSrc);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Если видео уже загружено (например, из кэша)
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc]);

  return (
    <section
      id={id}
      className={`${styles.videoSection} ${className}`}
      aria-label="Секция с фоновым видео"
    >
      {/* Фоновое видео */}
      <div className={styles.videoBackground}>
        {videoSrc && !isVideoError ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              autoPlay
              muted
              loop
              pip='false'
              playsInline
              preload={priority ? "auto" : "metadata"}
              className={`${styles.video} ${isVideoLoaded ? styles.videoLoaded : ''}`}
            >
              Ваш браузер не поддерживает видео.
            </video>
            
            {/* Показываем постер пока видео грузится */}
            {poster && !isVideoLoaded && (
              <div 
                className={styles.posterFallback}
                style={{ backgroundImage: `url(${poster})` }}
                aria-hidden="true"
              />
            )}
          </>
        ) : (
          // Если видео не указано или ошибка, показываем заглушку
          <div className={styles.videoFallback}>
            {poster ? (
              <div 
                className={styles.posterOnly}
                style={{ backgroundImage: `url(${poster})` }}
              />
            ) : (
              <div className={styles.gradientFallback} />
            )}
          </div>
        )}
      </div>

      {/* Контент поверх видео */}
      <div className={styles.contentOverlay}>
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );
};