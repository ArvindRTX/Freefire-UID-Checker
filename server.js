// server.js

// 1. Import necessary packages
const express = require("express");
const axios = require("axios");
const cors = require("cors");

// 2. Initialize the Express app and define the port
const app = express();
const PORT = 3000;

// 3. Use middleware
// This enables Cross-Origin Resource Sharing (CORS) for all routes,
// which is essential for your front-end to be able to call this server.
app.use(cors());

// 4. Define the API endpoint
app.get("/check-ban", async (req, res) => {
  // Get the 'uid' from the URL query parameters
  const { uid } = req.query;

  // Validate the UID to ensure it's a number between 5 and 15 digits
  if (!uid || !/^\d{5,15}$/.test(uid)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid or missing 'uid' parameter.",
    });
  }

  // Use a try...catch block to handle potential errors during the API call
  try {
    const banUrl = `https://ff.garena.com/api/antihack/check_banned?lang=en&uid=${uid}`;

    // Set the required headers to mimic a legitimate request
    const headers = {
      Accept: "application/json, text/plain, */*",
      "X-Requested-With": "B6FksShzIgjfrYImLpTsadjS86sddhFH",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36",
      Referer: "https://ff.garena.com/en/support/",
    };

    // Make the GET request to the Garena API using axios
    const garenaResponse = await axios.get(banUrl, { headers });
    const garenaData = garenaResponse.data; // Axios automatically parses the JSON response

    // Safely access the nested data from Garena's response
    const is_banned = garenaData?.data?.is_banned;
    const ban_period = garenaData?.data?.period;

    // If the 'is_banned' property doesn't exist, the API response was unexpected
    if (typeof is_banned === "undefined") {
      throw new Error(
        "Failed to retrieve a valid ban status from Garena's API."
      );
    }

    // Send a successful JSON response back to the client
    res.status(200).json({
      status: "success",
      uid: uid,
      is_banned: is_banned,
      ban_period: ban_period,
      message: is_banned ? `Player is banned.` : "Player is not banned.",
    });
  } catch (error) {
    // If any error occurs (network issue, API failure, etc.), send a 500 server error
    console.error("Error during API call:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to communicate with the Garena API.",
    });
  }
});

// 5. Start the server and listen for requests on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
