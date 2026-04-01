import { useState } from "react";
function Notification() {
  const hasMessage = true;

  return (
    <div>
      <h1>My Phone 📱</h1>

      {hasMessage && <p>🔔 You have a notification!</p>}
    </div>
  );
}

export default Notification;
