export const IMAGE_NAME = "devix-sandbox";
export const SANDBOX_NETWORK = "devix-sandbox-net";

// How long a container can sit idle before the reaper shuts it down.
export const IDLE_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

// How often the idle reaper checks for stale containers.
export const REAPER_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
