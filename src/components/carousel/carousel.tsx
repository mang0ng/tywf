import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './carousel.module.scss';

interface CarouselProps {
    className?: string;
    images: string[];
}

export const Carousel = ({ className, images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageContainer}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className={styles.image}
                />
            </div>
            <button onClick={handleNext} className={styles.navButton}>
                &lt;
            </button>
            <button onClick={handlePrev} className={styles.navButton}>
                &gt;
            </button>
        </div>
    );
};
