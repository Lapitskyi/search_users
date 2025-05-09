import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import {API_URL} from "@/service/constants";


export class ApiService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: API_URL,
            headers: { "Content-Type": "application/json" }
        });
        this.setupInterceptors();
    }

    protected setupInterceptors() {
        this.api.interceptors.request.use(this.handleRequest, this.handleRequestError);
        this.api.interceptors.response.use(this.handleResponse, this.handleResponseError);
    }

    protected async handleRequest(request: InternalAxiosRequestConfig) {
        return request;
    }

    protected handleRequestError(error: AxiosError) {
        console.error("Request Error:", error.message);
        return Promise.reject(error);
    }

    protected handleResponse<T>(response: AxiosResponse<T>) {
        return response.data;
    }

    protected async handleResponseError(error: AxiosError) {
        if (error.response) {
            console.error(
                `Response error [${error.response.status}]:`,
                error.response.data
            );
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Setup error:", error.message);
        }
        return Promise.reject(error);
    }

    async get<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            return await this.api.get(url, options);
        } catch (error) {
            throw error;
        }
    }

    async post<T, R = any>(url: string, body?: R, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            return await this.api.post(url, body, options);
        } catch (error) {
            throw error;
        }
    }

    async put<T, R = any>(url: string, body: R, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            return await this.api.put(url, body, options);
        } catch (error) {
            throw error;
        }
    }

    async patch<T, R = any>(url: string, body?: R, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            return await this.api.patch(url, body, options);
        } catch (error) {
            throw error;
        }
    }

    async delete<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            return await this.api.delete(url, options);
        } catch (error) {
            throw error;
        }
    }
}

export const api = new ApiService();
