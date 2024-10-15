import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Discover your next favorite film with our curated recommendations! Whether you’re in the mood for a thrilling action, a heartfelt drama, or a laugh-out-loud comedy, we’ve got you covered. Explore a diverse selection of movies that cater to every taste, and let our expert picks guide you to cinematic gems you won't want to miss!</p>

          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 ITC COLLEGE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
