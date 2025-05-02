import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const logInData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(logInData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "something went wrong");
      }

      const data = await response.json();

      setUserData(data);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Failed to login");
    }
  }
  return (
    <div className="LoginPage">
      {!userData ? (
        <form onSubmit={handleSubmit} className="login-form">
          <span>
            <label for="Email"> Email : </label>
            <input
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span>
            <label for="Password"> Password : </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>

          <p>forgot password ? </p>
          <button className="logIn-btn"> LogIN </button>
        </form>
      ) : (
        <div className="user-details">
          <h2>Welcome!</h2>
          <p>
            <strong>Seat Number:</strong> {userData.student.name}
          </p>
          <p>
            <strong>Slot:</strong> {userData.student.slot}
          </p>
          <p>
            <strong>Plan:</strong> {userData.subscription.plan}
          </p>
          <p>
            <strong>Plan Ends On:</strong>{" "}
            {new Date(userData.subscription.endDate).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default LogIn;
