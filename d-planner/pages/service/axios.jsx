import React from "react";
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    Headers: {
        Authorization: typeof window !== 'undefined' ? `${localStorage.getItem("token")}` : null
    }
})



