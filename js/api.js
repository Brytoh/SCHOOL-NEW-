// ===============================
// Google Apps Script API
// ===============================

const API = {

    BASE_URL: "https://script.google.com/macros/s/AKfycbx_dcGpkyENUGdxTsxE4wyFyuusTcgTWrdkkRV4ZRJ5KFpkKKTFMjUaPjzMRBoEVBmG/exec",

    async get(sheet) {

        try {

            const response = await fetch(`${this.BASE_URL}?sheet=${sheet}`);

            if (!response.ok) {

                throw new Error(`HTTP Error: ${response.status}`);

            }

            return await response.json();

        }

        catch(error){

            console.error("API Error:", error);

            return [];

        }

    }

};