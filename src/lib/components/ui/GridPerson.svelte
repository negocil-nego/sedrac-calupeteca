<script lang="ts">
    import { t } from "../../i18n";
    import { topicsItems } from "../data/person.svelte";
    import AboutMeDialog from "./person/AboutMeDialog.svelte";
    import CourseDialog from "./person/CourseDialog.svelte";
    import WorksDialog from "./person/WorksDialog.svelte";
    import ProjectDialog from "./person/ProjectDialog.svelte";

    const items = topicsItems;
</script>

<section
    class="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 w-full items-start justify-items-start"
>
    {#each items as it, i (it.id)}
        <div
            class="w-31.25 h-30 space-y-1 cursor-pointer bg-white/10 rounded-lg hover:bg-white/20 hover:rounded-lg p-2  animate__animated animate__backInLeft animate__delay-{items.length - i}s"
        >
            <button
                class="flex flex-col items-start justify-start"
                command="show-modal"
                commandfor="{it.id}-dialog"
            >
                <div>
                    <i class="{it.icon} text-2xl lg:text-4xl"></i>
                </div>
                <div class="text-left">{$t(it.title)}</div>
            </button>
        </div>
    {/each}
</section>

<AboutMeDialog />
<CourseDialog />
<WorksDialog />
<ProjectDialog />
