import fs from "fs";
import path from "path";
import { formattedDate, formattedDateSlug } from "./lib/dateTime";

const title: string | string[] | undefined = process.argv[2];

if (!title) {
  console.error("❌ Ooppss, title is required");
  console.log(`Example : npm run create-post "Ini judul baru"`);
  process.exit(1);
}

const slug: string = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

if (!slug || slug.length < 3) {
  console.error(
    "❌ Slug is not valid! Make sure title is have more than 3 character/number."
  );
  process.exit(1);
}

if (/^\d+$/.test(slug)) {
  console.error("❌ Title should contain character");
  process.exit(1);
}

const postsDir = path.join(__dirname, "./posts");

const existingPosts = fs.readdirSync(postsDir);
const isSlugExist = existingPosts.some((file) => file.includes(`-${slug}.md`));

if (isSlugExist) {
  console.error(`❌ Slug '${slug}' is exist! Change the title.`);
  process.exit(1);
}

const fileName: string = `${formattedDateSlug()}-${slug}.md`;
const filePath: string = path.join(postsDir, fileName);

const content: string = `---
title: "${title}"
date: "${formattedDate()}"
description: "Deskripsi singkat artikel ini."
slug: "${slug}"
---

# ${title}

Write content here...`;

fs.writeFileSync(filePath, content);
console.log(`✅ Post is successfully created in posts/${fileName}`);
