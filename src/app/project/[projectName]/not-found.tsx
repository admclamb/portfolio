import Layout from "@/components/layout/layout";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6 mt-4">
        Looks like I haven&apos;t made that project yet 😆
      </h1>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Go back home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
