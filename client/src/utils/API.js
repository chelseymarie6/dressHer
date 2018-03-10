import axios from "axios";

export default {
  getAll: function() {
    return axios.get("/all");
  },

  createItem: function(itemData) {
    return axios.post("/new", itemData);
  }
};
