
export const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating); // puro star
    const hasHalfStar = rating % 1 !== 0; // half star thakbe ki na
    const emptyStars = 5 - Math.ceil(rating); // baki empty stars

    // full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
    }

    // half star
    if (hasHalfStar) {
        stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
    }

    // empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="fa-regular fa-star"></i>);
    }

    return stars;
};
