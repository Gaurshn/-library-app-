function PlanList() {
  return (
    <div className="planlist">
      <div className="plan-card">
        <h3>1 Month-plan</h3>
        <p className="price">Rs 499/-</p>
        <ul className="features">
          <li>Access to all slots</li>
          <li>Unlimited seat booking</li>
          <li>Validity: 30 days</li>
          <li>Free wifi</li>
        </ul>
        <button className="subscribe-btn">Enroll</button>
      </div>

      <div className="plan-card">
        <h3>3 Month-plan</h3>
        <p className="price">Rs 1299/-</p>
        <ul className="features">
          <li>Access to all slots</li>
          <li>Unlimited seat booking</li>
          <li>Validity: 90 days</li>
          <li>Free wifi</li>
        </ul>
        <button className="subscribe-btn">Enroll</button>
      </div>

      <div className="plan-card">
        <h3>6 Month-plan</h3>
        <p className="price">Rs 2499/-</p>
        <ul className="features">
          <li>Access to all slots</li>
          <li>Unlimited seat booking</li>
          <li>Validity: 180 days</li>
          <li>Free wifi</li>
        </ul>
        <button className="subscribe-btn">Enroll</button>
      </div>
    </div>
  );
}

export default PlanList;
