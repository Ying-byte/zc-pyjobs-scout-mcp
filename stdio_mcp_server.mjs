#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "pyjobs",
  boardId: "pyjobs-official",
  domain: "pyjobs.com",
  npmName: "zc-pyjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
