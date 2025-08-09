import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { formValidation } from "../../utils/signupValidation"
import { signupThunk } from "../../redux/signup"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        c_password: '',
    })
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useSelector(state => state.signup);

    useEffect(() => {
        if (data) {
          navigate('/home');  
        }
      }, [data, navigate]);
    
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = formValidation(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({})
        dispatch(signupThunk(form))
    }

    return (
        <div id="form-container">
            <form method="post" id="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">{ errors.name&&errors.name||"enter your name"}</label>
                <input
                    type="text" name="name" id="name-input" placeholder="Name" required
                    onChange={ handleChange}
                    value={form.name}
                />
                
                <label htmlFor="email">{ errors.email&&errors.email||"enter your email"}</label>
                <input
                    type="email" name="email" id="email-input" placeholder="email" required
                    onChange={ handleChange}
                    value={form.email}
                />
                
                <label htmlFor="password">{ errors.password&&errors.password||"enter strong password"}</label>
                <input
                    type="password" name="password" id="password-input" placeholder="password" required
                  onChange={handleChange}
                    value={form.password}
                />
                
                <label htmlFor="c_password">{ errors.c_password&&errors.c_password||"confirm your password"}</label>
                <input
                    type="password" name="c_password" id="c-password-input" placeholder="confirm password" required
                    onChange={handleChange}
                    value={form.c_password}
                />
                
                <button type="submit">Sign Up</button>
            </form>
            <p>or</p>
        <button onClick={()=>navigate("/login")}>log in</button>
        </div>
    )
}