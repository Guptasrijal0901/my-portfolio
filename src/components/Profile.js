// src/components/Profile.js
import React from 'react';

function Profile() {
  return (
    <section>
      <h2>Profile</h2>
      <p><strong>Name:</strong> Srijal Gupta</p>
      <p><strong>Contact No:</strong> +91 9336039041</p>
      <p><strong>Email ID:</strong> <a href="mailto:srijal0901@gmail.com">srijal0901@gmail.com</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Guptasrijal0901">github.com/Guptasrijal0901</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/srijal-gupta-93840b292">linkedin.com/in/srijal-gupta-93840b292</a></p>
      <h3>Academic Details</h3>
      <ul>
        <li><strong>B. Tech (Electronics and Communication Engineering):</strong> 2021-2025, Madan Mohan Malaviya University of Technology, Gorakhpur, CGPA: 6.5/10.0</li>
        <li><strong>Class XII (CBSE):</strong> 2019, Air Force School, Gorakhpur, Percentage: 80.0%</li>
        <li><strong>Class X (ICSE):</strong> 2017, Air Force School, Gorakhpur, Percentage: 93.0%</li>
      </ul>
    </section>
  );
}

export default Profile;
