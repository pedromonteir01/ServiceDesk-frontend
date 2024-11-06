"use server";

import axios from "axios";

// const api = process.env.URL;
const api = process.env.URL + "/requests";

export const getAllRequests = async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getLocais = async () => {
  try {
    const response = await axios.get(`${api}/locais`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getRequestsByName = async (title) => {
  try {
    const response = await axios.get(`${api}/title/${title}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getRequestById = async (id) => {
  try {
    const response = await axios.get(`${api}/${id}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getRequestByLocal = async (local) => {
  try {
    const response = await axios.get(`${api}/local/${local}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getRequestByStatus = async (status) => {
  try {
    const response = await axios.get(`${api}/status/${status}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const getRequestByUser = async (user) => {
  try {
    const response = await axios.get(`${api}/user/${user}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const createRequest = async (formData, token) => {
  console.log("Testing createRequest");
  console.log("FormData in actions:", formData);
  
  try {
    const response = await axios.post(`${api}/request-create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      validateStatus: function(status) {
        return status >= 200 && status < 300; // Default
      }
    });
    
    console.log("Response from createRequest:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating request:", error.response ? error.response.data : error);
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
      console.log("Headers:", error.response.headers);
    } else if (error.request) {
      console.log("No response received");
    } else {
      console.log("Error message:", error.message);
    }
    
    return { error: "Error creating request", message: error.message };
  }
};


export const updateRequest = async (id, request) => {
  try {
    const response = await axios.put(`${api}/${id}`, request);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};

export const deleteRequest = async (id) => {
  try {
    const response = await axios.delete(`${api}/${id}`);
    return response.data;
  } catch (e) {
    return e.response.data || { error: "opereação fracassou" };
  }
};

export const concludeStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${api}/${id}/conclude`, { status });
    return response.data;
  } catch (e) {
    return e.response.data || { error: "operação fracassou" };
  }
};
