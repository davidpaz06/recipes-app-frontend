import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface UseAPIConfig {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  id?: number;
  body?: any;
  headers?: boolean;
}

const useAPI = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const apiRequest = async ({
    method,
    url,
    id,
    body,
    headers,
  }: UseAPIConfig) => {
    const fullUrl = id ? `${url}/${id}` : url;

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (headers) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    setLoading(true);

    try {
      const response = await fetch(fullUrl, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      return data;
    } catch (error) {
      console.error("API Request Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { apiRequest, loading };
};

export default useAPI;
