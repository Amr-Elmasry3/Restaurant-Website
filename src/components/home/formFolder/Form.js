import "./form.css";
import Button from "../../button/Button";
// Import Matrial Icons
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

// Import UseState Hook
import { useState } from "react";

export default function Form() {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPersons: "",
    date: "",
    time: "",
  });

  function handleBookingData(key, value) {
    setBookingData({ ...bookingData, [key]: value });
  }

  return (
    <form className="form">
      <span className="title">Book Your Table</span>

      <div className="box">
        <PersonOutlineIcon className="icon" />
        <input
          type="text"
          placeholder="Enter Name"
          value={bookingData.name}
          onChange={(eve) => {
            handleBookingData("name", eve.target.value);
          }}
        />
      </div>

      <div className="box">
        <MailOutlineIcon className="icon" />
        <input
          type="email"
          placeholder="Enter Email"
          value={bookingData.email}
          onChange={(eve) => {
            handleBookingData("email", eve.target.value);
          }}
        />
      </div>

      <div className="box">
        <PhoneIcon className="icon" />
        <input
          type="number"
          placeholder="Enter Phone"
          value={bookingData.phone}
          onChange={(eve) => {
            handleBookingData("phone", eve.target.value);
          }}
        />
      </div>

      <div className="box">
        <PeopleAltIcon className="icon" />
        <select
          value={bookingData.numberOfPersons}
          onChange={(eve) => {
            handleBookingData("numberOfPersons", eve.target.value);
          }}
        >
          <option value="">Choose Guest</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
        </select>
      </div>

      <div className="box">
        <CalendarMonthIcon className="icon" />
        <input
          type="date"
          value={bookingData.date}
          onChange={(eve) => {
            console.log(eve.target.value);
            handleBookingData("date", eve.target.value);
          }}
        />
      </div>

      <div className="box">
        <AccessTimeFilledIcon className="icon" />
        <select
          value={bookingData.time}
          onChange={(eve) => {
            handleBookingData("time", eve.target.value);
          }}
        >
          <option value="">Choose Time</option>
          <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
          <option value="09:30 AM - 11:30 AM">09:30 AM - 11:30 AM</option>
          <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
          <option value="11:30 AM - 01:30 PM">11:30 AM - 01:30 PM</option>
          <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
          <option value="01:30 PM - 03:30 PM">01:30 PM - 03:30 PM</option>
          <option value="03:30 PM - 05:30 PM">03:30 PM - 05:30 PM</option>
          <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
          <option value="05:30 PM - 07:30 PM">05:30 PM - 07:30 PM</option>
        </select>
      </div>

      <Button buttonName="Book Now" />
    </form>
  );
}
