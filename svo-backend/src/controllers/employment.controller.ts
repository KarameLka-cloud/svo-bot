import { BaseController } from "./base.controller.ts";
import { EmploymentService } from "../services/employment.service.ts";

export class EmploymentController extends BaseController {
  constructor() {
    super(new EmploymentService());
  }
}
