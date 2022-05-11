import PostModel from "@/resources/post/post.model";
import Post from '@/resources/post/post.interface';

class PostService {
    private post = PostModel;

    /**
     * Create a new post
     */
    public async createPost(title: string, body: string): Promise<Post> {

        try {
            const newPost = new this.post({
                title,
                body,
            });
            await newPost.save();
            return newPost;
        } catch (e: any) {
            throw new Error(`Unable to create post: ${e.message}`);
        }
    }
}

export default PostService;