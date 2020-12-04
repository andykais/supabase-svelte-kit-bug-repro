# supabase-js svelte kit bug repro

## Requirements
- node >= 14

## Start
```bash
npm install
npm run dev -- --open
```

The line causing the bug is in index.svelte:
```js
  import { createClient } from '@supabase/supabase-js'
```
