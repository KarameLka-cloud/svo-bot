import { BaseController } from "./base.controller.ts";
import { MenuService } from "../services/menu.service.ts";

export class MenuController extends BaseController {
  constructor() {
    super(new MenuService());
  }
}
