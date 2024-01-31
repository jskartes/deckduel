import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../utilities/usersService';
import { registerUser } from '../utilities/usersAPI';

const UserRegistration = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      errorMessage: ''
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const { username, email, password } = formData;
      const payload = {username, email, password};
      const credentials = {username, password};
      await registerUser(payload);
      const user = await loginUser(credentials);
      setUser(user);
    } catch {
      setFormData({
        ...formData,
        errorMessage: 'Registration failed; try again'
      });
    }
  }

  const submitDisabled = (
    formData.password.length < 8 ||
    formData.password !== formData.confirmPassword
  );

  return (
    <div className='UserRegistration'>
      <span className='form-title'>New Player Registration</span>

      <form onSubmit={handleSubmit} autoComplete='off'>
        <label>Username</label>
        <input
          required
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <div></div>
        <div className='form-instruction'>
          <p className={formData.username.length > 20 ? 'invalid' : ''}>
            Maximum 20 characters
          </p>
          <p className={
            /^[A-Za-z0-9_]*$/.test(formData.username) ? '' : 'invalid'
          }>Alphanumeric (A&ndash;Z, a&ndash;z, 0&ndash;9) and/or underscores (_) only</p>
        </div>

        <label>E-mail Address</label>
        <input
          required
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          required
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <div></div>
        <div className='form-instruction'>
          <p className={formData.password.length < 8 ? 'invalid' : ''}>
            Minimum 8 characters
          </p>
        </div>

        <label>Confirm Password</label>
        <input
          required
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div></div>
        <div className='form-instruction'>
          <p className={
            formData.password === formData.confirmPassword ? '' : 'invalid'
          }>Must match password entered above</p>
        </div>

        <button
          className='nav-button'
          type='submit'
          disabled={submitDisabled}
        >Register</button>

        <p className='error-message'>&nbsp;{formData.errorMessage}</p>
      </form>

      <Link className='nav-button' to='/login'>Player Login</Link>
    </div>
  );
}

export default UserRegistration;
