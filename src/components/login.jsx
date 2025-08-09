import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginThunk } from "../../redux/login";
import { loginFormValidation } from "../../utils/loginValidation";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { data, loading, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (data) navigate("/home");
    if (error) setErrors({ server: error });
  }, [data, navigate, error]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = loginFormValidation(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    dispatch(loginThunk(form));
  };

  return (
    <div id="login-container">
      <form method="post" onSubmit={handleSubmit}>
        <h1>log in</h1>
        <label htmlFor="email">
          {(errors.email && errors.email) || "enter your email"}
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="email"
          required
          onChange={handleChange}
          value={form.email}
          disabled={loading}
        />

        <label htmlFor="password">
          {(errors.password && errors.password) || "enter strong password"}
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="password"
          required
          onChange={handleChange}
          value={form.password}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "log in..." : "log in"}
        </button>
        <p>{errors.server ? errors.server : ""}</p>
      </form>
      <p>or</p>
      <button onClick={() => navigate("/signup")}>signup</button>
    </div>
  );
};
