import { sql } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { projects } from "~/server/db/schema";

export const projectRouter = createTRPCRouter({
  getFeatured: publicProcedure.query(async ({ ctx }) => {
    const featured = await ctx.db.query.featuredProjects.findMany({
      with: {
        project: true,
      },
      orderBy: (featuredProjects, { asc }) => [asc(featuredProjects.order)],
    });

    return featured.map((f) => f.project);
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

      const [projectsList, totalCount] = await Promise.all([
        ctx.db.query.projects.findMany({
          limit: input.size,
          offset,
          orderBy: (projects, { desc }) => [desc(projects.createdAt)],
        }),
        ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(projects)
          .then((result) => Number(result[0]?.count ?? 0)),
      ]);

      return {
        projects: projectsList,
        metadata: {
          totalCount,
          pageCount: Math.ceil(totalCount / input.size),
          currentPage: input.page,
          pageSize: input.size,
        },
      };
    }),
});
