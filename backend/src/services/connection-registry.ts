const shellConnections = new Map<string, number>();

export const ConnectionRegistry = {
  /**
   * Registers a new shell connection for the given project.
   * Returns the updated connection count.
   */
  connect(projectId: string): number {
    const count = (shellConnections.get(projectId) ?? 0) + 1;
    shellConnections.set(projectId, count);
    console.log(`[ConnectionRegistry] +1 shell connection for project "${projectId}". Total: ${count}`);
    return count;
  },

  /**
   * Removes a shell connection for the given project.
   * Returns true if this was the last connection (count reached 0),
   * meaning it is now safe to stop the container.
   */
  disconnect(projectId: string): boolean {
    const count = Math.max((shellConnections.get(projectId) ?? 1) - 1, 0);

    if (count === 0) {
      shellConnections.delete(projectId);
      console.log(`[ConnectionRegistry] Last shell connection closed for project "${projectId}". Container can be stopped.`);
      return true;
    }

    shellConnections.set(projectId, count);
    console.log(`[ConnectionRegistry] -1 shell connection for project "${projectId}". Remaining: ${count}`);
    return false;
  },

  /** Returns the current number of active shell connections for a project. */
  getCount(projectId: string): number {
    return shellConnections.get(projectId) ?? 0;
  },
};
