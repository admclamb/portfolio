import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatest: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(10).default(5),
      }),
    )
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.query.posts.findMany({
        with: {
          type: true,
        },
        limit: input.limit,
        orderBy: (posts, { desc }) => [desc(posts.publishedAt)],
        where: (posts, { isNotNull }) => isNotNull(posts.publishedAt),
      });

      return posts;
    }),
});
