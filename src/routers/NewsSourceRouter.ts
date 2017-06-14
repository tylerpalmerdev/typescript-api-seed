import { AppRouter } from './AppRouter';
import { newsSourceController } from './../controllers/newsSourceController';

export class NewsSourceRouter extends AppRouter {
    constructor() {
        super();
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/', newsSourceController.list);
        this.router.post('/', newsSourceController.create);
        this.router.get('/:id', newsSourceController.read);
        this.router.put('/:id', newsSourceController.update);
        this.router.delete('/:id', newsSourceController.delete);
    }
}