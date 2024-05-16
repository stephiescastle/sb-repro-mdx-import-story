# Bug: MDX doesn't recognize CSF's imported from node_modules

To reproduce:

1. `pnpm install`
2. `pnpm run --filter @monorepo/storybook storybook`

View the storybook. Note that:

1. The MDX documentation for `Button` works as expected
2. The MDX documentation for `ImportedButton` reports "`<Meta of={} />` must reference a CSF file module export or meta export"

The imported CSF is covered by the stories glob in `main.js`, and you can even see the story appear in the sidebar.
