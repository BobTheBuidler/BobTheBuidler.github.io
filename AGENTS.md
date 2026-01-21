# Agent Requirements

All agents must follow these rules:

1) Fully test your changes before submitting a PR (run the full suite or all relevant tests).
2) PR titles must be descriptive and follow Conventional Commits-style prefixes:
   - Common: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `perf:`
   - Support titles: `fix(docs):`, `fix(benchmarks):`, `fix(cicd):`
3) Commit messages must follow the same Conventional Commits-style prefixes and include a short functional description plus a user-facing value proposition.
4) PR descriptions must include Summary, Rationale, and Details sections.
5) If the branch you're assigned to work on tracks a remote branch (e.g., origin/master or upstream/awesome-feature), you must sync it before you begin:
   - `git fetch <remote>` and then `git pull --rebase` (or the repo's preferred update method).
   - Confirm your local branch is at the latest remote HEAD.

Reference: https://www.conventionalcommits.org/en/v1.0.0/
