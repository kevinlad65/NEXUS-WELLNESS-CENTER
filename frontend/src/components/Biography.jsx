import React from "react";

const Biography = ({imageUrl})=> {

    return(
      <div className="container biography">
        <div className="banner">
          {/* <img src={imageUrl} alt="about.png" />
           */}
          <img src={imageUrl} alt="about" className="" />

        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Nexus Wellness Center is more than just a hospital; it's a sanctuary for holistic well-being. Founded on principles of compassion and innovation, we blend conventional medicine with alternative therapies to redefine healthcare. Our multidisciplinary team of experts collaborates to provide personalized care, integrating modalities like acupuncture, yoga, and nutritional counseling. We prioritize patient-centered care, fostering empowerment and healing of the mind, body, and spirit. Committed to excellence and community engagement, Nexus Wellness Center is dedicated to guiding individuals on their journey to optimal health and happiness. Welcome to a place where health meets harmony.

Experience the transformative power of holistic healing at Nexus Wellness Center – where every step is a step towards a healthier, happier life.
          </p>
        </div>
      </div>
    )
}

export default Biography