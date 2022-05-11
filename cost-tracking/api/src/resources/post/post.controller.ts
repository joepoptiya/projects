import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/post/post.validation';
import PostService from '@/resources/post/post.service';

class PostController implements Controller {
    public path = '/posts';
    public router = Router();
    private PostService = new PostService();

    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes(): void {
        this.router.post(`${this.path}`, validationMiddleware(validate.create), this.createPost);
    }

    private createPost = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const { title, body } = req.body;
            const post = await this.PostService.createPost(title, body);
            res.status(201).send(post);
        } catch (e: any) {
            next(new HttpException(400, e.message));
        }
    }
}

export default PostController;