import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  console.log(formData);

  const [passwordMatch, setPasswrodMatch] = useState(true);
  useEffect(() => {
    setPasswrodMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  }, [formData.password, formData.confirmPassword]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const register_form = new FormData();
      for (var key in formData) {
        register_form.append(key, formData[key]);
      }
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form,
      });
      if (response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Registration failed", err.message);
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <form
          className="register_content_form"
          action=""
          onSubmit={handleSubmit}
        >
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            type="text"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            type="text"
            onChange={handleChange}
            required
          />

          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            type="password"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            type="password"
            onChange={handleChange}
            required
          />
          {!passwordMatch && (
            <p style={{ color: "red" }}>Password not matched</p>
          )}
          <input
            id="image"
            name="profileImage"
            type="file"
            onChange={handleChange}
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="Add profile photo" />
            <p>Upload Your Photo</p>
          </label>
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            ></img>
          )}
          <button type="submit" disabled={!passwordMatch}>
            REGISTER
          </button>
        </form>
        <a href="/login">Already have an account? Log In here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
