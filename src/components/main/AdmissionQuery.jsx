import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Send } from "lucide-react";
import { submitAdmissionQuery } from "@/services/crm";
import { toast } from "sonner";
import { getAllStates, getCitiesForState } from "@/services/stateData";

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
    validation: (value) => value.trim().length >= 2,
    errorMessage: "Name must be at least 2 characters long",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: "Please enter a valid email address",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
    validation: (value) => /^[0-9]{10}$/.test(value),
    errorMessage: "Please enter a valid 10-digit phone number",
  },
  {
    name: "coursesid",
    label: "Course",
    type: "select",
    placeholder: "Select a course",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a course",
    options: [
      { value: "1500", label: "B.Tech" },
      { value: "1550", label: "B.Tech (AI & ML)" },
      { value: "4211", label: "BCA" },
      { value: "4701", label: "BBA" },
      { value: "8410", label: "MBA" },
    ],
  },
  {
    name: "stateid",
    label: "State",
    type: "select",
    placeholder: "Select your state",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a state",
    options: getAllStates(),
  },
  {
    name: "cityid",
    label: "City",
    type: "select",
    placeholder: "Select your city",
    required: true,
    validation: (value) => value !== "",
    errorMessage: "Please select a city",
    options: [], // Will be populated based on selected state
  },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  coursesid: "",
  stateid: "",
  cityid: "",
};

export function AdmissionQuery({ courseName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (name === "stateid") {
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, cityid: "" }));
      // Get cities for selected state
      const stateCities = getCitiesForState(value);
      setCities(stateCities);
    }
  };

  const validateField = (name, value) => {
    const field = formFields.find((f) => f.name === name);
    if (!field) return "";
    if (field.required && !value) return `${field.label} is required`;
    if (value && field.validation && !field.validation(value)) {
      return field.errorMessage;
    }
    return "";
  };

  // Handler to restrict name input to only letters and spaces
  const handleNameInput = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
    e.target.value = value;
    setFormData((prev) => ({ ...prev, name: value }));
    setErrors((prev) => ({ ...prev, name: validateField("name", value) }));
  };

  // Handler to restrict phone input to only digits, first digit >= 6, max 10 digits
  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 0) {
      // Only allow first digit >= 6
      if (value[0] < "6") {
        value = value.slice(1);
      }
    }
    if (value.length > 10) value = value.slice(0, 10);
    e.target.value = value;
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: validateField("phone", value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitAdmissionQuery(formData);
      toast.success("Form submitted successfully!");
      setFormData(initialFormData);
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed right-[8px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-cusGreen to-cusGreenLight text-white px-8 py-4 -rotate-90 origin-right z-50 hover:shadow-lg transition-all duration-300 rounded-t-lg font-medium tracking-wide"
            style={{ transformOrigin: "calc(100% - 8px) 50%" }}
            onClick={() => setIsOpen(true)}
            initial={{ x: 0 }}
            whileHover={{ x: -5, scale: 1.02 }}
            exit={{ x: 100 }}
          >
            <span className="flex items-center gap-2">
              Admission Query
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        )}

        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-1/2 -translate-y-1/2 w-full max-w-sm z-50 rounded-l-xl shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-l-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cusGreen to-cusGreenLight text-transparent bg-clip-text">
                      Admission Query
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Fill the form below and we'll get back to you
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-3">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full p-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-gray-200"
                          } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
                          required={field.required}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.name === "cityid" && cities.length > 0
                            ? cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))
                            : field.options.map((option) => (
                                <option
                                  key={
                                    typeof option === "object"
                                      ? option.value
                                      : option
                                  }
                                  value={
                                    typeof option === "object"
                                      ? option.value
                                      : option
                                  }
                                >
                                  {typeof option === "object"
                                    ? option.label
                                    : option}
                                </option>
                              ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full p-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-500"
                              : "border-gray-200"
                          } bg-white focus:outline-none focus:border-cusGreen focus:ring-1 focus:ring-cusGreen text-sm transition-all duration-200`}
                          required={field.required}
                          {...(field.name === "name"
                            ? {
                                onInput: handleNameInput,
                                inputMode: "text",
                                autoComplete: "off",
                              }
                            : {})}
                          {...(field.name === "phone"
                            ? {
                                onInput: handlePhoneInput,
                                inputMode: "numeric",
                                pattern: "[6-9][0-9]{9}",
                                maxLength: 10,
                                autoComplete: "off",
                              }
                            : {})}
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-3 bg-gradient-to-r from-cusGreen to-cusGreenLight text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium mt-2 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Query"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
