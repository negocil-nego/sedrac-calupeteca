<script lang="ts">
    import { t } from "../../i18n";
    import { skillItems } from "../data/section.svelte";

    const items = skillItems;
</script>

<section class="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
    {#each items as it (it.id)}
        <div class="flex gap-3">
            <div>
                <i class="{it.icon} text-lg"></i>
            </div>

            <div class="flex flex-col gap-2">
                <div class="space-y-1">
                    <p>{$t(it.title)}</p>
                    <p class="text-sm">{$t(it.description)}</p>
                </div>
                <div class="flex gap-2 md:gap-5 xl:gap-10">
                    {#each it.items as i (i.id)}
                        <div class="bg-white/80 backdrop-blur-2xl rounded-full p-2">
                            <img src={i.image} alt="" class="w-8 h-8 rounded-2xl"/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</section>
