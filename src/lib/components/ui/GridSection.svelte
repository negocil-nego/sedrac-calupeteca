<script lang="ts">
  import { t } from "../../i18n";
  import { skillItems } from "../data/section.svelte";

  const items = skillItems;
</script>

<section class="grid grid-cols-1 gap-3 lg:gap-5 md:grid-cols-2 w-full">
  {#each items as it, i (it.id)}
    <div
      class="flex gap-3 animate__animated animate__backInUp animate__delay-{i +
        1}s"
    >
      <div>
        <i class="{it.icon} text-lg"></i>
      </div>

      <div class="flex min-w-0 flex-col gap-3">
        <div class="space-y-1">
          <p>{$t(it.title)}</p>
          <p class="text-xs">{$t(it.description)}</p>
        </div>
        <div class="flex flex-wrap gap-2 md:gap-3 xl:gap-5">
          {#each it.items as d, idx (d.id)}
            <div class="relative flex flex-col items-center gap-1">
              <button
                type="button"
                aria-controls="skill-popover-{d.id}"
                popovertarget="skill-popover-{d.id}"
                style="anchor-name: --skill-{d.id}"
                class="flex flex-col justify-center items-center gap-1 cursor-pointer"
              >
                <div
                  class="bg-white/80 hover:bg-slate-600 backdrop-blur-2xl rounded-full p-2 animate__animated animate__fadeInLeft animate__delay-{idx +
                    1}s"
                >
                  <img src={d.image} alt="" class="h-6 w-6 rounded-xl" />
                </div>
                <div>{d.title}</div>
              </button>
              <div
                id="skill-popover-{d.id}"
                popover="auto"
                style="position-anchor: --skill-{d.id};"
                class="skill-popover z-100 w-64 max-w-[calc(100vw-1.5rem)] rounded-xl border border-white/15 bg-slate-900 p-4 text-left text-white shadow-xl"
                aria-label={d.title}
              >
                <button
                  type="button"
                  popovertarget="skill-popover-{d.id}"
                  popovertargetaction="hide"
                  class="absolute right-2 top-2 rounded p-1 text-white/70 hover:text-white"
                  aria-label="Fechar">×</button
                >
                <h3 class="pr-5 font-semibold">{d.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-white/80">
                  {d.description}
                </p>
                <div class="mt-4 flex flex-col gap-2">
                  <button
                    type="button"
                    popovertarget="skill-popover-{d.id}"
                    popovertargetaction="hide"
                    command="show-modal"
                    commandfor="project-dialog"
                    class="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                    >Ver projectos</button
                  >
                  <button
                    type="button"
                    popovertarget="skill-popover-{d.id}"
                    popovertargetaction="hide"
                    command="show-modal"
                    commandfor="awards-dialog"
                    class="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold hover:bg-white/10"
                    >Prémios</button
                  >
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</section>
