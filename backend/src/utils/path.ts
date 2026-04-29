import path from "path";

export const sanitizePath = (base: string, userInput: string): string => {
  // Reject any path containing '..' sequences before they hit the fs module
  if (userInput.includes("..")) {
    throw new Error("Invalid path: '..' sequences are not allowed");
  }

  // Resolve the full path and ensure it's within the base directory
  // We resolve the userInput relative to the current working directory (backend root)
  // which is how the paths are currently structured in the app.
  const resolvedPath = path.resolve(userInput);
  const normalizedBase = path.resolve(base);

  if (!resolvedPath.startsWith(normalizedBase)) {
    throw new Error("Access denied: Path is outside the project directory");
  }

  return resolvedPath;
};
