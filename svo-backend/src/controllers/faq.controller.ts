import { BaseController } from "./base.controller.ts";
import { FaqService } from "../services/faq.service.ts";

export class FaqController extends BaseController {
  constructor() {
    super(new FaqService());
  }
}
