import { prisma } from "../../lib/prisma.ts";

const mainClient = prisma.menu;
const faqClient = prisma.faq;
const feedback = prisma.feedback;

export { mainClient, faqClient, feedback };
