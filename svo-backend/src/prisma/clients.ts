import { prisma } from "../../lib/prisma.ts";

const screensClient = prisma.screens;
const mainClient = prisma.menu;
const faqClient = prisma.faq;
const fundClient = prisma.fund;
const feedbackClient = prisma.feedback;

export { screensClient, mainClient, faqClient, fundClient, feedbackClient };
