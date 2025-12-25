# Conventional commits + changesets workflow

## Quick start
- Set the template once: `git config commit.template .gitmessage`
- Install deps (runs Husky `prepare`): `pnpm install`
- Make changes, then commit normally; the commit-msg hook runs `commitlint`.
- Check your last commit manually: `pnpm lint:commit`

## Message format
`type(optional-scope): subject`
- Types: `build` `chore` `ci` `docs` `feat` `fix` `perf` `refactor` `revert` `style` `test`
- Scope: optional; if used, keep it short, kebab- or lowercase (e.g. `auth`, `charting-ui`)
- Subject: imperative, lower-case, no trailing period, header ≤ 72 chars
- Body/footer: add a blank line before the body and before the footer; explain why/what/how; add `Closes #123` or `BREAKING CHANGE: ...` when relevant

## Tooling in this repo
- `commitlint.config.cjs`: enforces types, subject rules, kebab/lower scopes, and blank lines before body/footer
- `.husky/commit-msg`: `pnpm exec commitlint --edit "$1"`
- `package.json` scripts:
  - `prepare`: installs Husky hooks
  - `lint:commit`: validates the last commit range (`HEAD~1..HEAD`)
  - `changeset`: add a changeset note
  - `version`: apply queued version bumps
  - `release`: publish (skips private packages)
- `.vscode/settings.json`: git input validation at 72 chars
- `.gitmessage`: starter template for commits

## Changesets flow (versioning/changelog)
1) After meaningful changes, run `pnpm changeset` and answer the prompts.
2) When ready to cut a release, run `pnpm version` (applies queued changesets and bumps versions).
3) Publish (or skip for private apps) with `pnpm release`.
4) Commit the generated files (`.changeset`, `package.json`, lockfile).

