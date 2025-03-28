import { sql } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { experience } from "~/server/db/schema";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        size: z.number().min(1).max(100).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const offset = (input.page - 1) * input.size;

      const [experienceList, totalCount] = await Promise.all([
        ctx.db.query.experience.findMany({
          limit: input.size,
          offset,
          orderBy: (experience, { desc }) => [desc(experience.startedAt)],
        }),
        ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(experience)
          .then((result) => Number(result[0]?.count ?? 0)),
      ]);

      return {
        experience: experienceList,
        metadata: {
          totalCount,
          pageCount: Math.ceil(totalCount / input.size),
          currentPage: input.page,
          pageSize: input.size,
        },
      };
    }),
});
