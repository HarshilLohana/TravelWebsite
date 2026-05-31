import sharp from "sharp";
import { readdir, stat, mkdir, copyFile, unlink } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { existsSync } from "fs";

const INPUT_DIR = "./public/images";
const BACKUP_DIR = "./public/images-backup";
const OUTPUT_DIR = "./public/images-compressed";

const WEBP_QUALITY = 80;
const PNG_QUALITY = 80;
const MAX_WIDTH = 1920;

const SIZES = {
  favicon: 64,
  "apple-favicon": 180,
  logo: 400,
  review: 200,
  footer_bg_2: 800,
};

function getMaxWidth(filename) {
  const name = filename.toLowerCase();
  for (const [key, size] of Object.entries(SIZES)) {
    if (name.includes(key)) return size;
  }
  return MAX_WIDTH;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressImages() {
  console.log("\n🚀 Starting image compression...\n");

  // Create output and backup directories
  if (!existsSync(OUTPUT_DIR)) await mkdir(OUTPUT_DIR, { recursive: true });
  if (!existsSync(BACKUP_DIR)) await mkdir(BACKUP_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) => {
    const ext = extname(f).toLowerCase();
    return [".webp", ".png", ".jpg", ".jpeg"].includes(ext);
  });

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const outputPath = join(OUTPUT_DIR, file);
    const backupPath = join(BACKUP_DIR, file);
    const ext = extname(file).toLowerCase();
    const name = basename(file, ext);

    try {
      const statBefore = await stat(inputPath);
      const sizeBefore = statBefore.size;
      totalBefore += sizeBefore;

      const maxWidth = getMaxWidth(name);

      let pipeline = sharp(inputPath).resize({
        width: maxWidth,
        withoutEnlargement: true,
        fit: "inside",
      });

      if (ext === ".webp") {
        pipeline = pipeline.webp({ quality: WEBP_QUALITY });
      } else if (ext === ".png") {
        pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
      } else if (ext === ".jpg" || ext === ".jpeg") {
        pipeline = pipeline.jpeg({ quality: WEBP_QUALITY, progressive: true });
      }

      // Write compressed version to output folder
      await pipeline.toFile(outputPath);

      const statAfter = await stat(outputPath);
      const sizeAfter = statAfter.size;

      if (sizeAfter < sizeBefore) {
        // Backup original
        await copyFile(inputPath, backupPath);
        // Copy compressed to original location
        await copyFile(outputPath, inputPath);

        totalAfter += sizeAfter;
        processed++;

        const saving = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
        console.log(
          `✅ ${file.padEnd(40)} ${formatBytes(sizeBefore).padStart(10)} → ${formatBytes(sizeAfter).padStart(10)} (${saving}% smaller)`
        );
      } else {
        totalAfter += sizeBefore;
        skipped++;
        console.log(
          `⏭️  ${file.padEnd(40)} ${formatBytes(sizeBefore).padStart(10)} → already optimized`
        );
      }
    } catch (err) {
      errors++;
      console.error(`❌ Error processing ${file}: ${err.message}`);
    }
  }

  console.log("\n" + "─".repeat(70));
  console.log(`📊 Results:`);
  console.log(`   Files processed : ${processed}`);
  console.log(`   Files skipped   : ${skipped}`);
  console.log(`   Errors          : ${errors}`);
  console.log(`   Before          : ${formatBytes(totalBefore)}`);
  console.log(`   After           : ${formatBytes(totalAfter)}`);
  console.log(
    `   Total saved     : ${formatBytes(totalBefore - totalAfter)} (${(
      ((totalBefore - totalAfter) / totalBefore) * 100
    ).toFixed(1)}% reduction)`
  );
  console.log("─".repeat(70));
  console.log("\n✨ Done!");
  console.log(`📁 Originals backed up to: ${BACKUP_DIR}`);
  console.log(`📁 Compressed copies in  : ${OUTPUT_DIR}\n`);
}

compressImages().catch(console.error);