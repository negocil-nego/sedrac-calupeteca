<script lang="ts">
    import { t } from "../../i18n";
    import { skillItems } from "../data/section.svelte";

    const items = skillItems;
</script>

<section class="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
    {#each items as it, i (it.id)}
        <div class="flex gap-3 animate__animated animate__backInUp animate__delay-{i+1}s">
            <div>
                <i class="{it.icon} text-lg"></i>
            </div>

            <div class="flex flex-col gap-2">
                <div class="space-y-1">
                    <p>{$t(it.title)}</p>
                    <p class="text-sm">{$t(it.description)}</p>
                </div>
                <div class="flex gap-2 md:gap-5 xl:gap-10">
                    {#each it.items as d, idx (d.id)}
                        <div class="bg-white/80 backdrop-blur-2xl rounded-full p-2 animate__animated animate__fadeInLeft animate__delay-{idx + 1}s">
                            <img src={d.image} alt="" class="w-8 h-8 rounded-2xl"/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</section>
