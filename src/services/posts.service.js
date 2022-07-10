import {Http} from "@/services/http";


export class PostsService {
    URL = 'http://81.28.6.88:5000/posts/'

    static async fetchPosts(limit = 10, page = 1) {
        try {
            return await Http.get(`http://81.28.6.88:5000/posts?limit=${limit}&page=${page}`);
        } catch (e) {
            throw new Error(e)
        }
    }

    static async createPosts(post) {
        try {
            return await Http.post(this.URL, post)
        } catch (e) {
            throw new Error(e)
        }
    }

    static async updatePost(post) {
        try {
            return await Http.put(this.URL, post)
        } catch (e) {
            throw new Error(e)
        }
    }

    static async deletePost(id) {
        try {
            return await Http.delete(this.URL + id)
        } catch (e) {
            throw new Error(e)
        }
    }
}