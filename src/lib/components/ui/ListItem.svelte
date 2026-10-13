<script lang="ts">
    import type { SkillItem } from "../data/types";

    interface Props {
        title: string;
        subtitle?: string;
        type?: string;
        period?: string;
        description?: string;
        skills?: SkillItem[];
        link?: string;
    }

    let { title, subtitle, type, period, description, skills, link }: Props =
        $props();

    const typeLabel = $derived(
        type ? type.charAt(0).toUpperCase() + type.slice(1) : undefined
    );
</script>

<li class="flex">
    {#snippet body()}
        <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
                <p class="font-semibold">{title}</p>
                {#if typeLabel}
                    <span
                        class="rounded-full border border-border px-2 py-0.5 text-[0.65rem] text-foreground/70"
                    >
                        {typeLabel}
                    </span>
                {/if}
            </div>

            {#if subtitle}
                <p class="text-sm text-foreground/70">{subtitle}</p>
            {/if}

            {#if period}
                <span class="w-fit py-0.5 text-xs text-foreground/70">
                    {period}
                </span>
            {/if}

            {#if description}
                <p class="whitespace-pre-line text-sm text-foreground/70 mt-1">
                    {description}
                </p>
            {/if}

            {#if skills?.length}
                <div class="mt-2 flex flex-wrap gap-2">
                    {#each skills as skill (skill.id)}
                        <span
                            class="flex w-fit items-center gap-1.5 rounded-full bg-white/85 px-2 py-1 text-xs text-on-accent"
                        >
                            <img src={skill.image} alt="" class="size-4" />
                            {skill.title}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
    {/snippet}

    {#if link}
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex w-full items-start gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-white/5"
        >
            {@render body()}

            <i
                class="hgi hgi-stroke hgi-rounded hgi-external-link mt-1 shrink-0 text-foreground/40 transition-colors group-hover:text-foreground"
            ></i>
        </a>
    {:else}
        <div class="flex w-full items-start gap-3">
            {@render body()}
        </div>
    {/if}
</li>
