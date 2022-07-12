import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://zubkivnormi.herokuapp.com/api/stories', {
         
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://zubkivnormi.herokuapp.com/api/stories/' + id)
        return response;
    }
 
    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
