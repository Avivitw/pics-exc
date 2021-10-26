import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 17ahiksTbSceMKUzY5B-ZSA1CJULraYRMNo512H7SoE",
  },
});
