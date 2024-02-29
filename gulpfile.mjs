
import { tools, tasks } from "@iiimaddiniii/js-build-tool";

async function createIndexDts() {
  const oldFileContent = await tools.read("./node_modules/@iiimaddiniii/js-build-tool/dist/index.d.ts");
  const indexOfFirstImport = oldFileContent.indexOf("import ") - 1;
  const references = oldFileContent.substring(0, indexOfFirstImport);
  const module = oldFileContent.substring(indexOfFirstImport);
  const newFileContent = `
${references}
declare module "consts:production" {
  let production: boolean;
  export default production;
}
declare module "consts:development" {
  let development: boolean;
  export default development;
}
declare module "consts:testing" {
  let testing: boolean;
  export default testing;
}

declare module "@iiimaddiniii/js-build-tool" {
${module}
}
  `;
  await tools.write("./index.d.ts", newFileContent);
}

async function synchronizePackageVersion() {
  const version = await tools.getPackageVersion("./node_modules/@iiimaddiniii/js-build-tool/package.json");
  tools.exec`pnpm version ${version}`;
}

export const clean = tools.exitAfter(tasks.cleanWithGit());

export const build = tools.exitAfter(
  tasks.installDependencies(),
  tasks.updatePackages(),
  createIndexDts);

export const buildCi = tools.exitAfter(
  tasks.cleanWithGit(),
  tasks.installDependencies(),
  tasks.updatePackages(),
  createIndexDts);

export const publishPackage = tools.exitAfter(
  tasks.cleanWithGit(),
  tasks.installDependencies(),
  tasks.updatePackages(),
  createIndexDts,
  synchronizePackageVersion,
  tasks.publishPackage());