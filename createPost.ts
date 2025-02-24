import fs from "fs";
import path from "path";

const title: string | string[] | undefined = process.argv[2];

if (!title) {
  console.error("❌❌ Ooppss, title is required ❌❌");
  console.log(`Example : npm run create-post "Ini judul baru"`);
  process.exit(1);
}
