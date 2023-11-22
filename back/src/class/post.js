class Post {
    static #list = [];
    static #count = 1;

    constructor(userename, text) {
        this.id = Post.#count++;
        this.userename = userename;
        this.text = text;
        this.date = new Date().getTime();

        this.reply = [];
    }

    static create(username, text, post) {
        const newPost = new Post(username, text);
        
        if(post) {
            post.reply.push(newPost);
        } else {
            this.#list.push(newPost)
        }

        console.log(this.#list)

        return newPost;
    }

    

    static getById(id) {
        return (
            this.#list.find(post => post.id === Number(id)) || 
            null
            );
    }

    static getList() {
        return this.#list;
    }
}

module.exports = { 
    Post,
    };