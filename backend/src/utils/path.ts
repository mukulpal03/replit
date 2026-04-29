import path from "path";

export const sanitizePath = (base: string, userInput: string): string => {
  // Reject any path containing '..' sequences before they hit the fs module
  if (userInput.includes("..")) {
    throw new Error("Invalid path: '..' sequences are not allowed");
  }

  // Resolve the full path and ensure it's within the base directory
  // We use path.join and then path.resolve to get an absolute path
  const resolvedPath = path.resolve(path.join(base, userInput));
  const normalizedBase = path.resolve(base);

  if (!resolvedPath.startsWith(normalizedBase)) {
    throw new Error("Access denied: Path is outside the project directory");
  }

  return resolvedPath;
};
