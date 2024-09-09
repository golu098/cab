import React, { useState } from 'react';
import './Carousel.css';  // CSS file for styling

const feedbackData = [
    { id: 1, text: "Fantastic service! Highly recommend to anyone looking for reliable car services.", name: "John Doe" },
    { id: 2, text: "Very pleased with the promptness and the professionalism displayed.", name: "Jane Smith" },
    { id: 3, text: "Drivers are courteous and respectful. Great experience every time I've used their service.", name: "Emily Johnson" }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextFeedback = () => {
        if (currentIndex === feedbackData.length - 1) { // Check for the last item
            setCurrentIndex(0); // Reset to first item if last is reached
        } else {
            setCurrentIndex(currentIndex + 1); // Move to next item
        }
    };

    const prevFeedback = () => {
        if (currentIndex === 0) { // Check for the first item
            setCurrentIndex(feedbackData.length - 1); // Move to last item if first is reached
        } else {
            setCurrentIndex(currentIndex - 1); // Move to previous item
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel-feedback">
                <p className="feedback-text">{feedbackData[currentIndex].text}</p>
                <p className="feedback-author">{feedbackData[currentIndex].name}</p>
            </div>
            <div className="carousel-controls">
                <button onClick={prevFeedback}>&laquo; Prev</button>
                <button onClick={nextFeedback}>Next &raquo;</button>
            </div>
        </div>
    );
};

export default Carousel;