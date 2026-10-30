export type JsonLdSchema = Record<string, unknown>;

export function serializeSchema(schema: JsonLdSchema): string {
	const json = JSON.stringify(schema, null, 2).replace(/</g, "\\u003c");
	return `<script type="application/ld+json">${json}</script>`;
}
