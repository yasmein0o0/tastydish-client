import { useState } from "react";
import { contactValidation } from "../../utils/contactValidation";
import { useDispatch, useSelector } from "react-redux";
import { Subscribe } from "./subscribe";
import { Similarities } from "./similar";
import { Footer } from "./footer";
import { contactThunk } from "../../redux/contatct";

export const Contact = () => {
  const { data, loading, error } = useSelector((state) => state.contact);
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
      <h1>contact us</h1>
      <div id="form-pic">
        <img src="" alt="" />
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">
            {(errors.name && errors.name) || "enter your name"}
          </label>
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
          />
          <label htmlFor="email">
            {(errors.email && errors.email) || "enter your email"}
          </label>
          <input
            type="email"
            name="email"
            id="input-email"
            required
            max={100}
            onChange={handleChange}
            value={form.email}
            disabled={loading}
          />

          <label htmlFor="subject">
            {(errors.subject && errors.subject) || "enter subject"}
          </label>
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
          />
          <label htmlFor="message">
            {(errors.message && errors.message) || "enter your message"}
          </label>
          <textarea
            name="message"
            id="message"
            required
            min={3}
            max={500}
            onChange={handleChange}
            value={form.message}
            disabled={loading}
          />
          <button>submit</button>
        </form>
      </div>
      <Subscribe />
      <Similarities />
      <Footer />
    </div>
  );
};
