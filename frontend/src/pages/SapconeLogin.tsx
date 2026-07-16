import React, { useEffect } from "react";

const SapconeLogin: React.FC = () => {
  useEffect(() => {
    const pwInput = document.getElementById("password") as HTMLInputElement | null;
    const toggleBtn = document.getElementById("togglePw");
    const eyeIcon = document.getElementById("eyeIcon");

    if (!pwInput || !toggleBtn || !eyeIcon) return;

    const handleToggle = () => {
      const isHidden = pwInput.type === "password";
      pwInput.type = isHidden ? "text" : "password";
      toggleBtn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
      eyeIcon.innerHTML = isHidden
        ? '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.6 21.6 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.6 21.6 0 0 1-2.66 3.79M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/>'
        : '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/>';
    };

    toggleBtn.addEventListener("click", handleToggle);

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      // Wire this up to your auth endpoint.
      console.log("Login submitted:", {
        email: (document.getElementById("email") as HTMLInputElement)?.value,
        remember: (document.getElementById("remember") as HTMLInputElement)?.checked,
      });
    };

    const form = document.getElementById("loginForm");
    form?.addEventListener("submit", handleSubmit);

    return () => {
      toggleBtn.removeEventListener("click", handleToggle);
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        :root {
          --bg-cream: #f2ead9;
          --card-bg: #fffdf8;
          --green-dark: #2f5233;
          --green-mid: #3f6b3f;
          --green-text: #3a6b3a;
          --brown-label: #a9622f;
          --input-border: #e3d9c4;
          --input-placeholder: #b9ae98;
          --footer-text: #8a8065;
          --btn-gradient: linear-gradient(90deg, #a4522c 0%, #7a6a34 55%, #3f6b3f 100%);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: 'Nunito Sans', 'Poppins', sans-serif;
          background: var(--bg-cream);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 16px;
          position: relative;
          overflow: hidden;
        }

        /* subtle corner accent, top-left */
        .corner-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 90px;
          background: linear-gradient(180deg, #5b3fae 0%, rgba(91,63,174,0) 100%);
          opacity: 0.55;
        }

        .login-wrap {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .brand-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(160deg, #3f7a3f, #1f4a26);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(47, 82, 51, 0.25);
          margin-bottom: 18px;
        }

        .brand-icon svg { width: 30px; height: 30px; }

        .brand-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 26px;
          color: var(--green-dark);
          margin: 0 0 4px;
          text-align: center;
          letter-spacing: 0.2px;
        }

        .brand-tagline {
          font-size: 13.5px;
          color: #6f6a56;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin: 0 0 32px;
          font-weight: 600;
        }

        .card {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid #ece2cc;
          border-radius: 14px;
          padding: 30px 32px 26px;
          box-shadow: 0 10px 30px rgba(70, 55, 20, 0.06);
        }

        .card h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--brown-label);
          margin: 0 0 4px;
        }

        .card .subtitle {
          font-size: 13.5px;
          color: #8d876f;
          margin: 0 0 22px;
        }

        form { display: flex; flex-direction: column; gap: 16px; }

        .field label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: var(--brown-label);
          margin-bottom: 7px;
        }

        .field label .req { color: #c0472c; }

        .field-row-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 7px;
        }

        .field-row-label label {
          margin-bottom: 0;
          color: var(--green-text);
        }

        .forgot-link {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--green-mid);
          text-decoration: none;
        }
        .forgot-link:hover { text-decoration: underline; }

        .input-wrap { position: relative; }

        input[type="email"],
        input[type="password"],
        input[type="text"] {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid var(--input-border);
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          background: #fffefb;
          color: #3a3527;
          outline: none;
          transition: border-color 0.15s ease;
        }

        input::placeholder { color: var(--input-placeholder); }

        input:focus {
          border-color: var(--green-mid);
          box-shadow: 0 0 0 3px rgba(63, 107, 63, 0.12);
        }

        .toggle-visibility {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9a9377;
          padding: 4px;
          display: flex;
        }
        .toggle-visibility svg { width: 18px; height: 18px; }

        .remember-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 2px;
        }

        .remember-row input[type="checkbox"] {
          width: 15px;
          height: 15px;
          accent-color: var(--green-mid);
          cursor: pointer;
        }

        .remember-row label {
          font-size: 13px;
          color: #6f6a56;
          cursor: pointer;
        }

        .login-btn {
          margin-top: 6px;
          width: 100%;
          border: none;
          border-radius: 8px;
          padding: 13px 18px;
          background: var(--btn-gradient);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: filter 0.15s ease, transform 0.1s ease;
        }
        .login-btn:hover { filter: brightness(1.06); }
        .login-btn:active { transform: translateY(1px); }
        .login-btn svg { width: 16px; height: 16px; }

        .signup-note {
          text-align: center;
          font-size: 13px;
          color: #6f6a56;
          margin: 18px 0 0;
        }
        .signup-note a {
          color: var(--green-mid);
          font-weight: 700;
          text-decoration: none;
        }
        .signup-note a:hover { text-decoration: underline; }

        .footer {
          margin-top: 26px;
          text-align: center;
        }

        .footer-links {
          font-size: 12px;
          color: var(--footer-text);
          margin: 0 0 6px;
        }
        .footer-links a {
          color: var(--footer-text);
          text-decoration: none;
        }
        .footer-links a:hover { text-decoration: underline; }
        .footer-links .dot {
          margin: 0 8px;
          color: #cfc7ac;
        }

        .footer-copy {
          font-size: 11.5px;
          color: #a39c81;
          margin: 0;
        }

        /* decorative bottom-left circle, forest/sunlight motif rendered in pure CSS/SVG */
        .corner-photo {
          position: absolute;
          left: -46px;
          bottom: -46px;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
          border: 4px solid #fffdf8;
        }
        .corner-photo svg { width: 100%; height: 100%; display: block; }

        @media (max-width: 480px) {
          .card { padding: 24px 20px 22px; }
          .corner-photo { width: 120px; height: 120px; left: -30px; bottom: -30px; }
        }
      `}</style>

      <div className="corner-accent"></div>

      <div className="login-wrap">
        <div className="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3c-3 2-5 5-5 8.5A5 5 0 0 0 12 16a5 5 0 0 0 5-4.5C17 8 15 5 12 3Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M12 16v5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M8.5 21h7" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="brand-name">Sapcone Organisation</h2>
        <p className="brand-tagline">Community Empowerment &amp; Support</p>

        <div className="card">
          <h1>Welcome Back</h1>
          <p className="subtitle">Login to your account</p>

          <form id="loginForm">
            <div className="field">
              <label htmlFor="email">Email address <span className="req">*</span></label>
              <div className="input-wrap">
                <input type="email" id="email" name="email" placeholder="yourname@domain.com" required />
              </div>
            </div>

            <div className="field">
              <div className="field-row-label">
                <label htmlFor="password">Password <span className="req">*</span></label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              <div className="input-wrap">
                <input type="password" id="password" name="password" placeholder="••••••••" required />
                <button type="button" className="toggle-visibility" id="togglePw" aria-label="Show password">
                  <svg id="eyeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="remember-row">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember this device</label>
            </div>

            <button type="submit" className="login-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              Login now
            </button>
          </form>

          <p className="signup-note">Don't have an account? <a href="#">Sign Up</a></p>
        </div>

        <div className="footer">
          <p className="footer-links">
            <a href="#">Privacy Policy</a><span className="dot">•</span><a href="#">Terms of Service</a><span className="dot">•</span><a href="#">Support</a>
          </p>
          <p className="footer-copy">© 2024 Sapcone Organisation. All rights reserved.</p>
        </div>
      </div>

      <div className="corner-photo" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sun" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fff3c4"/>
              <stop offset="35%" stopColor="#d9e69a"/>
              <stop offset="100%" stopColor="#3c5a2e"/>
            </radialGradient>
            <linearGradient id="trunk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b4327"/>
              <stop offset="100%" stopColor="#2e2115"/>
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#sun)"/>
          <g opacity="0.55">
            <rect x="20" y="60" width="10" height="140" fill="url(#trunk)"/>
            <rect x="60" y="20" width="9" height="180" fill="url(#trunk)"/>
            <rect x="150" y="40" width="9" height="160" fill="url(#trunk)"/>
            <rect x="175" y="70" width="8" height="130" fill="url(#trunk)"/>
            <rect x="100" y="0" width="8" height="200" fill="url(#trunk)"/>
          </g>
          <ellipse cx="70" cy="35" rx="90" ry="35" fill="#eaf0c8" opacity="0.35"/>
        </svg>
      </div>
    </>
  );
};

export default SapconeLogin;
