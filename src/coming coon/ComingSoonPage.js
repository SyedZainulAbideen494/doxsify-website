import { useState } from 'react';
import './ComingSoonPage.css';

function ComingSoon() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validate = (email, phone) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPhoneValid = /^\d{10}$/.test(phone);
    return isEmailValid && isPhoneValid;
  };

  const handleChange = (type, value) => {
    if (type === 'email') setEmail(value);
    else setPhone(value);
    setIsValid(validate(
      type === 'email' ? value : email,
      type === 'tel' ? value : phone
    ));
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    await fetch('https://srv594954.hstgr.cloud/api/notify/doxsify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, phone }),
    });

    alert('You’ll be notified when we launch!');
    setEmail('');
    setPhone('');
    setIsValid(false);
  };

  return (
    <div className="coming-soon-wrapper">
      <div className="glass-card">
        <h1 className="logo-text">Doxsify</h1>
        <p className="tagline">The Future of Healing is Loading...</p>
        <div className="loader" />
        <p className="coming-soon-text">Coming Soon</p>

        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          className="glass-input"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Enter your phone number"
          className="glass-input"
          onChange={(e) => handleChange('tel', e.target.value)}
        />

        <button
          className="notify-btn"
          disabled={!isValid}
          onClick={handleSubmit}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
}

export default ComingSoon;
