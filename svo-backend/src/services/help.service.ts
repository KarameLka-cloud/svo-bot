import { prisma } from "../../prisma/lib/prisma.ts";
import { BaseService } from "./base.service.ts";

export class HelpService extends BaseService {
  constructor() {
    super(prisma.help);
  }
}

export class HelpRelationsService extends BaseService {
  constructor() {
    super(prisma.help_relations);
  }

  getHelpRelationByHelpId(id: number) {
    return prisma.help_relations.findMany({
      where: {
        help_id: id,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
