import { prisma } from "../../prisma/lib/prisma.ts";
import { PrismaClient } from "@prisma/client/extension";

export class VisitorsService {
  client: PrismaClient["actions"];

  constructor() {
    this.client = prisma.visitors;
  }

  async create(data: { user_id: string | number; name: string }) {
    const { user_id, name } = data;

    const result = await this.client.create({
      data: {
        user_id,
        name,
        time: new Date(),
        date: new Date(),
      },
    });
    return result;
  }
}
