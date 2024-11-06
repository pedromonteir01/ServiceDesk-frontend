"use server";

import axios from "axios";

// const api = process.env.URL;
const api = process.env.URL + "/requests";
const apif = process.env.URL 

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

export const createRequest = async (requestData, token) => {
  console.log("testando createRequest");
  console.log("Request Data no actions:", requestData);
  const USER_ID = 123;
  try {
    const response = await axios.post(`${api}/requests`, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-user-id': USER_ID,
        'Content-Type': 'application/json'
      },
    });
    console.log("Response from createRequest:", response.data);
    return response.data;
  } catch (e) {
    console.log("Error creating request:", e.response ? e.response.data : e);
    return { error: "Error creating request", message: e.message };
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
