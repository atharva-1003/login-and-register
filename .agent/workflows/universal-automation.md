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
    - Open a terminal and `cd` into the cloned repository path.
    - Run `git checkout -b [branch-name]` (e.g., `demo2`).
4. **Implementation**:
    - Use the `filesystem` MCP server (access to `D:/`) to read and write files in the target repository.
    - Implement the requested changes based on the Jira ticket and Figma design.
    - Add a `README_[TICKET].md` file to document the changes.
5. **Push and PR**:
    - In the terminal, run `git add .` and `git commit -m "[Ticket ID]: [Summary]"`.
    - Run `git push origin [branch-name]`.
    - **Crucial**: Use the `automation_create_pull_request` tool from the **jira-figma** server to open the PR. 
    - Provide the repository `owner`, `repo` name, and the `head` branch you just pushed.

> [!TIP]
> Always use the tools from the `jira-figma` server for cloning and PRs, as they are pre-configured with the correct authentication tokens.
