<script lang="ts">
  import { serializeSchema, type JsonLdSchema } from "./json-ld";

  let { schema }: { schema: JsonLdSchema } = $props();
</script>

<svelte:head>
  {@html serializeSchema(schema)}
</svelte:head>
