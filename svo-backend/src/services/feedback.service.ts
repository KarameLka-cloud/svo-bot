import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class FeedbackService extends BaseService {
  constructor() {
    super(prisma.feedback);
  }
}
