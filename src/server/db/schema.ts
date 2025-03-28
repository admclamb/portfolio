// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const tags = createTable("tags", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const projects = createTable("projects", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  title: varchar("name", { length: 256 }),
  description: text("description"),
  sourceRepository: varchar("source_repository", { length: 256 }),
  deployLink: varchar("deploy_link", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const projectTags = createTable(
  "project_tags",
  {
    projectId: integer("project_id")
      .references(() => projects.id)
      .notNull(),
    tagId: integer("tag_id")
      .references(() => tags.id)
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (projectTag) => ({
    primaryKey: primaryKey({
      columns: [projectTag.projectId, projectTag.tagId],
    }),
  }),
);

export const featuredProjects = createTable(
  "featured_projects",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    projectId: integer("project_id")
      .references(() => projects.id)
      .notNull(),
    order: integer("order").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (featuredProject) => ({
    orderIndex: index("order_idx").on(featuredProject.order),
    uniqueProjectConstraint: unique().on(featuredProject.projectId),
  }),
);

export const companies = createTable("companies", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  logo: varchar("logo_url", { length: 512 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const contributionTypes = createTable("contribution_types", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const contributions = createTable("contributions", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  companyId: integer("company_id")
    .references(() => companies.id)
    .notNull(),
  typeId: integer("type_id")
    .references(() => contributionTypes.id)
    .notNull(),
  description: text("description").notNull(),
  sourceLink: varchar("source_link", { length: 512 }).notNull(),
  contributedAt: timestamp("contributed_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const featuredContributions = createTable(
  "featured_contributions",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    contributionId: integer("contribution_id")
      .references(() => contributions.id)
      .notNull(),
    order: integer("order").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (featuredContribution) => ({
    orderIndex: index("featured_contribution_order_idx").on(
      featuredContribution.order,
    ),
    uniqueContributionConstraint: unique().on(
      featuredContribution.contributionId,
    ),
  }),
);

export const educationDescriptions = createTable(
  "education_descriptions",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    educationId: integer("education_id")
      .references(() => education.id)
      .notNull(),
    description: text("description").notNull(),
    order: integer("order").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (educationDescription) => ({
    orderIndex: index("education_description_order_idx").on(
      educationDescription.order,
    ),
  }),
);

export const experienceDescriptions = createTable(
  "experience_descriptions",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    experienceId: integer("experience_id")
      .references(() => experience.id)
      .notNull(),
    description: text("description").notNull(),
    order: integer("order").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (experienceDescription) => ({
    orderIndex: index("experience_description_order_idx").on(
      experienceDescription.order,
    ),
  }),
);

export const education = createTable("education", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  schoolName: varchar("school_name", { length: 256 }).notNull(),
  schoolLogo: varchar("school_logo", { length: 512 }),
  concentration: varchar("concentration", { length: 256 }),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull(),
  endedAt: timestamp("ended_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const experience = createTable("experience", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  companyName: varchar("company_name", { length: 256 }).notNull(),
  companyLogo: varchar("company_logo", { length: 512 }),
  jobTitle: varchar("job_title", { length: 256 }).notNull(),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull(),
  endedAt: timestamp("ended_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const postTypes = createTable("post_types", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const posts = createTable(
  "posts",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    title: varchar("title", { length: 256 }).notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    summary: text("summary").notNull(),
    coverImage: varchar("cover_image", { length: 512 }),
    typeId: integer("type_id")
      .references(() => postTypes.id)
      .notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (post) => ({
    slugIndex: unique().on(post.slug),
  }),
);

export const postSections = createTable(
  "post_sections",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    postId: integer("post_id")
      .references(() => posts.id)
      .notNull(),
    title: varchar("title", { length: 256 }),
    content: text("content").notNull(),
    order: integer("order").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (postSection) => ({
    orderIndex: index("post_section_order_idx").on(postSection.order),
  }),
);

export const postTags = createTable(
  "post_tags",
  {
    postId: integer("post_id")
      .references(() => posts.id)
      .notNull(),
    tagId: integer("tag_id")
      .references(() => tags.id)
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (postTag) => ({
    primaryKey: primaryKey({
      columns: [postTag.postId, postTag.tagId],
    }),
  }),
);
