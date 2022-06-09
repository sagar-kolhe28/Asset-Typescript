import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mbpxqzgypapqdxtetkvn.supabase.co/rest/v1/",
});

apiClient.interceptors.request.use((_config: any) => {
  const config = _config;
  config.headers.apikey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icHhxemd5cGFwcWR4dGV0a3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MTk3OTksImV4cCI6MTk2MjI5NTc5OX0.p-NAGcLMwamRuKSwr07ZduPwOq7anW_CSjqYNEPiPiA";
  config.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icHhxemd5cGFwcWR4dGV0a3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MTk3OTksImV4cCI6MTk2MjI5NTc5OX0.p-NAGcLMwamRuKSwr07ZduPwOq7anW_CSjqYNEPiPiA";
  config.headers["Content-Type"] = "application/json";
  config.headers.Prefer = "return=represenation";
  return config;
});
export default apiClient;
