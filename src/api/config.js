const getBaseUrl = () => {
  // 1. Use environment variable FIRST (production-safe)
  const envUrl =
    process.env.REACT_APP_API_BASE_URL?.trim();

  if (envUrl) {
    return envUrl;
  }

  // 2. Local development fallback ONLY
  if (typeof window !== "undefined") {
    return "http://localhost:8000";
  }

  // 3. Ultimate fallback (safe default)
  return "http://localhost:8000";
};

export default getBaseUrl;
