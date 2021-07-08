import axios from "axios";
import {apiUrl} from "@/env"

export const api = {
    async getSitesInfo() {
        return axios.get(`${apiUrl}/siteinfo`)
    }
};