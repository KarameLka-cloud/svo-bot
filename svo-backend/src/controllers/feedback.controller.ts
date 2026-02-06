import { BaseController } from "./base.controller.ts";
import { FeedbackService } from "../services/feedback.service.ts";

export class FeedbackController extends BaseController {
  constructor() {
    super(new FeedbackService());
  }
}
