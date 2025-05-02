import { useState } from "react";
import { useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    slot: "",
    seat: "",
  });
  const [selectedSlot, setSelectedSlot] = useState("");
  const [showGrid, setShowGrid] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const totalSeats = 100;
  const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };
  return (
    <div className={`register-container ${showGrid ? "move-left" : ""}`}>
      <form className="form-panel" onSubmit={handleSubmit}>
        <span>
          <label>Name: </label>
          <input
            type="text"
            for="email"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </span>
        <span>
          <label>Phone no.: </label>
          <input
            type="text"
            for="email"
            value={formData.phoneno}
            onChange={(e) =>
              setFormData({ ...formData, phoneno: e.target.value })
            }
            required
          />
        </span>
        <span>
          <label>email: </label>
          <input
            type="text"
            for="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </span>
        <span>
          <label>Password: </label>
          <input
            type="password"
            for="email"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </span>
        <span>
          <label>Slot : </label>
          {["7-11 AM", "11-3 PM", "3-7 PM", "7-11 PM"].map((slot, i) => (
            <button
              type="button"
              onClick={() => {
                setSelectedSlot(slot);
                setShowGrid(true);
                setFormData({ ...formData, slot: slot });
              }}
              style={{
                backgroundColor: selectedSlot === slot ? "lightgreen" : "white",
              }}
            >
              {slot}
            </button>
          ))}
        </span>
        <span>
          <label>seat no. </label>
          <input type="Number" value={selectedSeat} />
        </span>
        <span>
          <label>Subscription plan: </label>
          <select>
            <option>1-month</option>
            <option>3-month</option>
            <option>6-month</option>
          </select>
        </span>
        <button>Complete Registration</button>
      </form>
      {showGrid && (
        <div className="seat-grid">
          {seats.map((seat) => (
            <div
              key={seat}
              className={`seat available ${selectedSeat === seat ? "selected" : ""}`}
              onClick={() => {
                setSelectedSeat(seat);
                setFormData({ ...formData, seat: seat });
                setShowGrid(false);
              }}
            >
              {seat}
            </div>
          ))}
        </div>
      )}{" "}
    </div>
  );
}

export default Register;
