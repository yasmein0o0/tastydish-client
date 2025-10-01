import { useState } from "react";
import { contactValidation } from "../utils/contactValidation";
import { useDispatch, useSelector } from "react-redux";
import { Subscribe } from "./subscribe";
import { Footer } from "./footer";
import { contactThunk } from "../redux/contatct";
import "../style/contact.scss";
import img from "../assets/Layer 1 1.png";
import { MoreRecipes } from "./similar";

export const Contact = () => {
  const { loading } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = contactValidation(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    dispatch(contactThunk(form));
  };
  return (
    <div id="contact-container">
      <h1>Contact us</h1>
      <div id="form-pic">
        <div id="img">
          <img src={img} alt="" />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">
            {(errors.name && errors.name) || "name"}
            <input
              type="text"
              name="name"
              id="input-name"
              required
              min={3}
              max={3}
              onChange={handleChange}
              value={form.name}
              disabled={loading}
              placeholder="enter your name"
            />
          </label>
          <label htmlFor="email">
            {(errors.email && errors.email) || "email address"}
            <input
              type="email"
              name="email"
              id="input-email"
              required
              max={100}
              onChange={handleChange}
              value={form.email}
              disabled={loading}
              placeholder="enter your email"
            />
          </label>

          <label htmlFor="subject" id="input-subject-label">
            {(errors.subject && errors.subject) || "subject"}
            <input
              type="text"
              name="subject"
              id="input-subject"
              required
              min={3}
              max={100}
              onChange={handleChange}
              value={form.subject}
              disabled={loading}
              placeholder="enter subject"
            />
          </label>

          <label htmlFor="type">
            {"enquery type"}
            <input
              type="text"
              name="type"
              id="input-type"
              required
              min={3}
              max={100}
              disabled={loading}
              placeholder="advertising"
            />
          </label>

          <label htmlFor="message" id="textarea-label">
            {(errors.message && errors.message) || " message"}
            <textarea
              name="message"
              id="message"
              required
              min={3}
              max={500}
              maxLength={500}
              onChange={handleChange}
              value={form.message}
              disabled={loading}
              placeholder="enter your message here..."
            />
          </label>

          <button>submit</button>
        </form>
      </div>
      <Subscribe />
      <MoreRecipes header={"Check out the delicious recipe"} />
      <Footer />
    </div>
  );
};
