export function validateContact(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    return { error: "Please send a valid form." };
  if (raw.companyUrl) return { error: "Your request could not be accepted." };
  const limits = {
    name: 100,
    businessName: 150,
    businessType: 100,
    email: 254,
    phone: 40,
    website: 500,
    message: 4000,
    plan: 30,
  };
  const data = {};
  for (const [key, max] of Object.entries(limits)) {
    if (raw[key] != null && typeof raw[key] !== "string")
      return { error: "Please check your form entries." };
    data[key] = (raw[key] || "").trim();
    if (data[key].length > max)
      return { error: "One or more fields are too long." };
  }
  if (!data.name || !data.businessName || !data.businessType || !data.message)
    return { error: "Please complete all required fields." };
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    /[\r\n]/.test(data.email)
  )
    return { error: "Please enter a valid email address." };
  if (raw.consent !== true)
    return {
      error: "Please confirm consent to contact you about this request.",
    };
  if (data.website) {
    try {
      const u = new URL(data.website);
      if (!["http:", "https:"].includes(u.protocol) || u.username || u.password)
        throw new Error();
    } catch {
      return {
        error: "Please enter a valid website URL starting with https://.",
      };
    }
  }
  data.plan = ["Website", "Basic", "Pro", "Custom", "Audit"].includes(data.plan)
    ? data.plan
    : "Audit";
  return { data };
}
