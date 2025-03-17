import React from "react";

const ServiceCard = ({ title, description, img, color }) => {
  return (
    <div className={`service-card ${color}`}>
      <h3>{title}</h3>
      {description.split("<br>").map((line, idx) => (
        <p key={idx}>
          {line}
          {idx !== description.split("<br>").length - 1 && <br />}
        </p>
      ))}
      <img src={img} alt={title} />
    </div>
  );
};

export default ServiceCard;
