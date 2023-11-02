import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ rating, maxStars = 5 }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarIcon key={i} />);
  }

  if (halfStar) {
    stars.push(<StarHalfIcon key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} />);
  }

  return stars;
};
export default Rating;
