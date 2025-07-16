// src/services/backend.js

const getAuthToken = async () => {
  try {
    const response = await fetch("https://glauniversity.in:8070/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: "EXT220001",
        password: "out@gla",
        grant_type: "password",
      }),
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting auth token:", error);
    throw error;
  }
};

export const submitLead = async (formData) => {
  try {
    const accessToken = await getAuthToken();

    // Log the data being sent
    console.log("Sending lead data:", formData);

    const response = await fetch(
      "https://glauniversity.in:8070/api/WebApi/PushLead",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
};
