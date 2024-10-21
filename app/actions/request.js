"use server";

import axios from "axios";

// const api = process.env.URL;
const api = process.env.URL;

export const getAllRequests = async () => {
  try {
    const response = await axios.get(`${api}/requests`);
    if (response.data.length === 0) {
      return { message: "none_requests" };
    }    
    return response.data;
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching requests", message: e.message };
  }
};

export const getRequestsByName = async (title) => {
  try {
    const response = await axios.get(`${api}/requests/title/${title}`);
    if (response.data.length === 0) {
      return { message: "none_requests" };
    }
    return { results: response.data.length, requests: response.data };
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching requests", message: e.message };
  }
};

export const getRequestById = async (id) => {
  try {
    const response = await axios.get(`${api}/requests/${id}`, {
      cache: "no-store",
    });
    if (response.data) {
      return { request: response.data };
    }
    return { error: 404, message: `Request not found with this id: ${id}` };
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching request", message: e.message };
  }
};

export const getRequestByLocal = async (local) => {
  try {
    const response = await axios.get(`${api}/requests/local/${local}`, {
      cache: "no-store",
    });
    if (response.data.length > 0) {
      return { requests: response.data };
    }
    return {
      error: 404,
      message: `Requests not found with this local: ${local}`,
    };
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching requests by local", message: e.message };
  }
};

export const getRequestByStatus = async (status) => {
  try {
    const response = await axios.get(`${api}/requests/status/${status}`, {
      cache: "no-store",
    });
    if (response.data.length > 0) {
      return { results: response.data.length, requests: response.data };
    }
    return {
      error: 404,
      message: `Requests not found with this status: ${status}`,
    };
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching requests by status", message: e.message };
  }
};

export const getRequestByUser = async (user) => {
  try {
    const response = await axios.get(`${api}/requests/user/${user}`, {
      cache: "no-store",
    });
    if (response.data.length > 0) {
      return { results: response.data.length, requests: response.data };
    }
    return {
      error: 404,
      message: `Requests not found with this user: ${user}`,
    };
  } catch (e) {
    console.log("Error fetching data:", e);
    return { error: "Error fetching requests by user", message: e.message };
  }
};

export const createRequest = async (formData, token) => {
  console.log("testando createRequest");
  console.log("FormData no actions:", formData);
  try {
    // const response = await axios.post(`${api}/upload-image`, formData, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    const response = await axios.post(`${api}/requests`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response from upload-image:", response.data);
    return response.data;
  } catch (e) {
    console.log("Error creating request:", e.response ? e.response.data : e);
    return { error: "Error creating request", message: e.message };
  }
};


export const updateRequest = async (id, request) => {
  try {
    const response = await axios.put(`${api}/requests/${id}`, request, {
      headers: { "Content-Type": "application/json" },
    });
    return {
      status: "success",
      message: "Request updated",
      data: response.data,
    };
  } catch (e) {
    console.log("Error updating request:", e);
    return { error: "Error updating request", message: e.message };
  }
};

export const deleteRequest = async (id) => {
  try {
    const response = await axios.delete(`${api}/requests/${id}`);
    return {
      status: "success",
      message: "Request deleted",
      data: response.data,
    };
  } catch (e) {
    console.log("Error deleting request:", e);
    return { error: "Error deleting request", message: e.message };
  }
};

export const concludeStatus = async (id, status) => {
  try {
    const response = await axios.patch(
      `${api}/requests/${id}/conclude`,
      { status },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return {
      status: "success",
      message: "Request concluded",
      data: response.data,
    };
  } catch (e) {
    console.log("Error concluding request:", e);
    return { error: "Error concluding request", message: e.message };
  }
};
