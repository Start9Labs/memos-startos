# Updating the upstream version

This package wraps the upstream [Memos](https://github.com/usememos/memos)
Docker image, `neosmemo/memos`. A bump is a tag change plus a check that the
runtime contract still holds.

## Determining the upstream version

- **memos** ([usememos/memos](https://github.com/usememos/memos)) — fetch the
  latest release tag:

  ```sh
  gh release view -R usememos/memos --json tagName -q .tagName
  ```

  Since 26.10.0 Memos uses calendar versions (`YY.MM`, optional `.N`, optional
  `-rc.N`) with no `v` prefix, and the Docker tag is the same string
  (`26.11.1` → `neosmemo/memos:26.11.1`). Skip `-rc` tags. Confirm the tag exists for both architectures
  before pinning it:

  ```sh
  docker buildx imagetools inspect neosmemo/memos:<new version> \
    --format '{{range .Manifest.Manifests}}{{.Platform.OS}}/{{.Platform.Architecture}} {{end}}'
  ```

  The current pin lives in `startos/manifest/index.ts` at
  `images.memos.source.dockerTag`.

## Applying the bump

- Bump `dockerTag` in `startos/manifest/index.ts`.
- Re-check the assumptions this package makes about the image, all of which are
  visible in its config (`docker buildx imagetools inspect neosmemo/memos:<tag>
  --format '{{json .Image}}'`):
  - the entrypoint still chowns `/var/opt/memos` before dropping to UID 10001,
  - `MEMOS_PORT`, `MEMOS_DATA`, and `MEMOS_DRIVER` still name the same things,
  - the internal port is still 5230.
- Read the upstream release notes for changes to `MEMOS_INSTANCE_URL`
  semantics — the package derives that value, so a change in what Memos does
  with it is a change in this package's behavior.
