// ===============================
// Google Apps Script API
// ===============================

const API = {

    BASE_URL: "https://script.google.com/macros/s/AKfycbyx0Jo5x2DEkaUajDL79sOSA51mrTp_0jMOw0xVnNbu93I6v-1ZavCxtKXV2rWZl37z/exec",

    async get(sheet) {

        try {

            const response = await fetch(`${this.BASE_URL}?sheet=${sheet}`);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();

            return data;

        }

        catch(error){

            console.error("API Error:", error);

            return [];

        }

    }

};