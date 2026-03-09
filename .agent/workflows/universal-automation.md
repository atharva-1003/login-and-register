---
description: Universal Jira-GitHub Automation Workflow
---

This workflow automates the process of implementing a Jira ticket on ANY repository, creating a branch, and opening a Pull Request.

### Workflow Steps

1. **Jira Context**: Use the `list_my_tickets` or `implement_ticket` tools from the `jira-figma` server to get the task details.
2. **Setup Repository**:
    - If the target repository is not the current working directory, use `automation_clone_repository` from the `jira-figma` server.
    - Clone to a specific path like `D:/[repo-name]`.
3. **Branching**:
    - Open a terminal and `cd` into the repo path.
    - **Step 1**: `git checkout main` (or `master`).
    - **Step 2**: `git pull origin main`.
    - **Step 3**: `git checkout -b [new-branch-name]`.
    - **Step 4**: `git remote set-url origin https://x-access-token:[YOUR_GITHUB_TOKEN]@github.com/[owner]/[repo].git` 
      *(Note: The `automation_clone_repository` tool already uses the token for cloning, but this ensures pushes work if needed).*
4. **Implementation**:
    - Use the `filesystem` MCP server to read/write files in `D:/[repo-name]`.
    - Implement changes and add a description file.
5. **Push and PR**:
    - In the terminal: `git add .`, `git commit -m "[message]"`, `git push origin [branch-name]`.
    - **CRITICAL**: Use the `automation_create_pull_request` tool from the **jira-figma** server to open the PR. Provide the correct `owner`, `repo`, and `head` branch.

> [!IMPORTANT]
> Use the tools with the `automation_` prefix to ensure correct authentication and behavior. Avoid the generic `create_pull_request` tool if it appears.
