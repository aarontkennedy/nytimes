import axios from "axios";

export default {
    setUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    getUser: function (userGoogleID) {
      return axios.get(`/api/user/${userGoogleID}`);
    }
  /*// Gets all books
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }*/
};