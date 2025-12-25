# Conventional Commits setup

- `.gitmessage`: template with type/scope/subject guidance.
- `.vscode/settings.json`: inline VS Code validation for `type(scope): subject`.
- `commitlint.config.cjs`: enforces Conventional Commit rules (72-char header, allowed types).
- `.husky/commit-msg`: runs `pnpm exec commitlint --edit "$1"` on commits.