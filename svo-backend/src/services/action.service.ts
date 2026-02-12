import { prisma } from "../../prisma/lib/prisma.ts";
import { PrismaClient } from "@prisma/client/extension";

export class ActionService {
  client: PrismaClient["actions"];

  constructor() {
    this.client = prisma.actions;
  }

  findMainButton() {
    return this.client.findMany({
      where: {
        parent_id: null,
      },
      orderBy: {
        id: "asc",
      },
    });
  }

  findById(id: number) {
    return this.client.findUnique({
      where: {
        id,
      },
    });
  }

  findByParentId(id: number) {
    return this.client.findMany({
      where: {
        parent_id: id,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
}
