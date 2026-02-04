import { MenuService } from "../services/menu.service.ts";

export class MenuController {
  service: any;

  constructor() {
    this.service = new MenuService();
  }

  getAll() {
    return this.service.findAll();
  }

  getById(id: number) {
    return this.service.findById(id);
  }
}
