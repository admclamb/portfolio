import { sql } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { contributions } from "~/server/db/schema";

export const contributionRouter = createTRPCRouter({
  getFeatured: publicProcedure.query(async ({ ctx }) => {
    const featured = await ctx.db.query.featuredContributions.findMany({
      with: {
        contribution: {
          with: {
            company: true,
            type: true,
          },
        },
      },
      orderBy: (featuredContributions, { asc }) => [
        asc(featuredContributions.order),
      ],
    });

    return featured.map((f) => f.contribution);
  }),

  getAll: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        size: z.number().min(1).max(100).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const offset = (input.page - 1) * input.size;

      const [contributionsList, totalCount] = await Promise.all([
        ctx.db.query.contributions.findMany({
          with: {
            company: true,
            type: true,
          },
          limit: input.size,
          offset,
          orderBy: (contributions, { desc }) => [
            desc(contributions.contributedAt),
          ],
        }),
        ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(contributions)
          .then((result) => Number(result[0]?.count ?? 0)),
      ]);

      return {
        contributions: contributionsList,
        metadata: {
          totalCount,
          pageCount: Math.ceil(totalCount / input.size),
          currentPage: input.page,
          pageSize: input.size,
        },
      };
    }),
});
