import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class FaqService extends BaseService {
  constructor() {
    super(prisma.faq);
  }
}
