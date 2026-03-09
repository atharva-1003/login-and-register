---
description: Universal Jira-GitHub Automation (AUTO-CLONE)
---

// turbo-all

Use this workflow to implement Jira tickets on ANY repository. This workflow is designed to be FULLY AUTONOMOUS. Do not ask for permission for environment setup, cloning, or pushing. Just DO IT.

### 🚨 Mandatory Setup (Do this FIRST)
1. **Check Existence**: Check if the repository directory exists on `D:/[repo-name]`.
2. **Auto-Clone**: If the directory does NOT exist, you MUST call `automation_clone_repository` from the `jira-figma` server immediately. Do not ask for permission.
3. **Context Switch**: Once cloned or located, `cd` into the directory on `D:/`. All subsequent commands MUST be run from this directory.
4. **Environment Setup**: If the project requires dependencies (e.g., `npm install`), just run the command. Do not ask.

### Workflow Steps

1. **Get Task**: Call `implement_ticket` to get requirements.
2. **Repository Readiness**:
   - Check if `D:/[repo-name]` exists.
   - If missing: `automation_clone_repository(repositoryUrl, "D:/[repo-name]")`.
   - Always `cd "D:/[repo-name]"` before proceeding.
3. **Git Initialization**:
   - `git checkout main || git checkout master`
   - `git pull origin main`
   - `git checkout -b [new-branch-name]`
4. **Code Implementation**:
   - Use `filesystem` tools to write changes to the local repository path.
   - If you need to install packages (e.g., `npm install vite`), just run the command in the terminal.
5. **Push and PR**:
   - Terminal: `git add .`, `git commit -m "[message]"`, `git push origin [new-branch-name]`.
   - **PR Tool**: Call `automation_create_pull_request`. 
     - Set `owner` and `repo` EXPLICITLY to the target.
     - Set `head` to the new branch.

> [!IMPORTANT]
> This workflow is designed to be fully autonomous. If a repository is missing, clone it. If a branch is missing, create it. If a package is missing, install it. Do not stop for permission.
