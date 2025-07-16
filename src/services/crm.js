import { submitLead } from "./backend";

const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

export const submitAdmissionQuery = async (formData) => {
  try {
    console.log("Raw form data received:", formData);

    const utmParams = getUTMParams();

    const crmPayload = {
      Campus: "Noida Campus#102",
      SubSession: "Summer",
      Source_Type: utmParams.source || "",
      Campaign: utmParams.campaign || "",
      Source_Name: utmParams.source || "",
      Sourse_Course_Code: formData.coursesid || "",
      Source_Medium: utmParams.medium || "",
      Course_Name: "",
      Branch: "",
      Study_Mode: "Offline",
      Name: formData.name || "",
      Father_Name: "",
      Mother_Name: "",
      Email_1: formData.email || "",
      Email_2: "",
      Contact_1: formData.phone || "",
      Contact_2: "",
      Address: "",
      Country: "India",
      State: formData.stateid || "",
      District: formData.cityid || "",
      Locality: "",
      Lead_Source_Type: null,
      Lead_Source_Name: null,
      Operation: "Add",
      SubmittedByCode: null,
      SubmittedByName: null,
      LeadComeFrom: "",
    };

    console.log("Constructed CRM payload:", crmPayload);
    const response = await submitLead(crmPayload);
    console.log("CRM API response:", response);

    if (response.Message?.Status === "Success") {
      window.location.href = "/thankyou.html";
      return {
        success: true,
        message: "Your query has been submitted successfully!",
      };
    } else {
      throw new Error(
        response.Message?.Description || "Failed to submit query"
      );
    }
  } catch (error) {
    console.error("CRM submission error:", error);
    return {
      success: false,
      message: "Failed to submit your query. Please try again later.",
      error: error.message,
    };
  }
};
