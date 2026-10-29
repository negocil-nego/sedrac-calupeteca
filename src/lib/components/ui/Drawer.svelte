<script lang="ts">
    import type { Snippet } from "svelte";
    import { t } from "../../i18n";

    interface Props {
        id: string;
        icon: string;
        title: string;
        children: Snippet;
    }

    let { id, icon, title, children }: Props = $props();
</script>

<dialog
    {id}
    class="drawer"
    aria-labelledby="{id}-title"
    onclick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
    }}
>
    <div class="flex h-full flex-col p-6">
        <header class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
                <i aria-hidden="true" class="{icon} text-2xl text-accent"></i>
                <h2 id="{id}-title" class="text-xl font-semibold">{title}</h2>
            </div>

            <button
                type="button"
                command="close"
                commandfor={id}
                aria-label={$t("common.close")}
                class="shrink-0 rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/10 hover:text-foreground"
            >
                <i aria-hidden="true" class="hgi hgi-stroke hgi-rounded hgi-cancel-01 text-xl"></i>
            </button>
        </header>

        <div class="min-h-0 mt-6 flex-1 overflow-y-auto">
            {@render children()}
        </div>
    </div>
</dialog>
