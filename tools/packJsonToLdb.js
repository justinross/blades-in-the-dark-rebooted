import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { promises as fs } from "fs";

// const MODULE_ID = "bitd-modernized";
const yaml = false;

const packs = await fs.readdir("./src/packs");
for (const pack of packs) {
  if (pack === ".gitattributes") continue;
  console.log("Packing " + pack);
  await compilePack(`./src/packs/${pack}`, `./assets/packs/${pack}`, { yaml });
}
