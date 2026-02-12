import { ActionService } from "../services/action.service.ts";

export class ActionController {
  service: ActionService;

  constructor() {
    this.service = new ActionService();
  }

  getMainButton() {
    return this.service.findMainButton();
  }

  getById(id: number) {
    return this.service.findById(id);
  }

  getByParentId(id: number) {
    return this.service.findByParentId(id);
  }
}
