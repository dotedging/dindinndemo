import React, { Component } from "react";
import IntlTelInput from "react-intl-tel-input";
import OtpInput from "react-otp-input";
import "react-intl-tel-input/dist/main.css";
import { useState, useEffect } from "react";
export default function Register() {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);

  return (
    <div className="register">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 offset-sm-2 offset-md-3 offset-lg-3 offset-xl-4">
          <div className="content_area">
            <div className="page_title">Login/Register</div>
            <div className="page_title">Enter your mobile number</div>
            <div className="page_description">
              A one-time password (OTP) will be sent to your mobile number via
              SMS
            </div>
            <div className="input-group mb-3 form_group">
              <IntlTelInput
                separateDialCode={true}
                containerClassName="intl-tel-input"
                inputClassName="form-control"
              />
            </div>
            <div className="page_title">Enter OTP</div>
            <div className="input-group mb-3 form_group">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                className="otp_content"
              />
            </div>
            <div className="submit_area">
              <button className="submit_btn">Next</button>
              <div className="back_text">Go back</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
