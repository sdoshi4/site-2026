import React, { useEffect } from "react";

export default function Live() {
  useEffect(() => {
    window.location.href = "https://www.twitch.tv/eohillinois";
  }, []);

  return (
    <div>
      <h1>This page is not available</h1>
      <p>You are redirecting to <a href="https://www.twitch.tv/eohillinois">https://www.twitch.tv/eohillinois</a></p>
    </div>
  );
}