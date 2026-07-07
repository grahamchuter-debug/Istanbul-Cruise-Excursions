// Downloads Istanbul imagery from Wikimedia Commons into public/images.
// Run: node scripts/download-images.mjs
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const OUT = "public/images";
const FORCE = process.env.FORCE === "1";
mkdirSync(OUT, { recursive: true });
const WIDTH = 1600;
const UA = "istanbul-cruise-excursions/1.0 (image fetch; contact webmaster)";

const DIRECT = {
  "hero-home.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hagia_Sophia_Mars_2013.jpg/1600px-Hagia_Sophia_Mars_2013.jpg",
  "og-default.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sultanahmet%2C_Istanbul%2C_Turkey.JPG/1600px-Sultanahmet%2C_Istanbul%2C_Turkey.JPG",
  "hagia-sophia.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hagia_Sophia_Mars_2013.jpg/1600px-Hagia_Sophia_Mars_2013.jpg",
  "blue-mosque.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Blue_Mosque%2C_Istanbul%2C_Turkey.jpg/1600px-Blue_Mosque%2C_Istanbul%2C_Turkey.jpg",
  "topkapi-palace.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Topkapi_Palace_Bosphorus_view.jpg/1600px-Topkapi_Palace_Bosphorus_view.jpg",
  "basilica-cistern.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Basilica_Cistern_Istanbul.JPG/1600px-Basilica_Cistern_Istanbul.JPG",
  "grand-bazaar.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Grand_Bazaar%2C_Istanbul%2C_Turkey.JPG/1600px-Grand_Bazaar%2C_Istanbul%2C_Turkey.JPG",
  "spice-bazaar.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Spice_Bazaar_Istanbul.jpg/1600px-Spice_Bazaar_Istanbul.jpg",
  "bosphorus.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bosphorus_bridge_and_istanbul.jpg/1600px-Bosphorus_bridge_and_istanbul.jpg",
  "cruise-port.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Galata_Tower_and_Golden_Horn.jpg/1600px-Galata_Tower_and_Golden_Horn.jpg",
  "highlights.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sultanahmet%2C_Istanbul%2C_Turkey.JPG/1600px-Sultanahmet%2C_Istanbul%2C_Turkey.JPG",
  "city-highlights.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sultanahmet%2C_Istanbul%2C_Turkey.JPG/1600px-Sultanahmet%2C_Istanbul%2C_Turkey.JPG",
  "food.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Turkish_cuisine.jpg/1600px-Turkish_cuisine.jpg",
  "walking.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Galata_Bridge_Istanbul.jpg/1600px-Galata_Bridge_Istanbul.jpg",
  "europe-asia.jpg": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bosphorus_bridge_and_istanbul.jpg/1600px-Bosphorus_bridge_and_istanbul.jpg",
};

async function download(name, url) {
  const dest = join(OUT, name);
  if (!FORCE && existsSync(dest)) {
    console.log(`skip ${name}`);
    return;
  }
  console.log(`fetch ${name}`);
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
}

for (const [name, url] of Object.entries(DIRECT)) {
  await download(name, url);
}
console.log("Done.");
