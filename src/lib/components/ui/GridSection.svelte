<script lang="ts">
  import { t } from "../../i18n";
  import { skillItems } from "../data/section.svelte";

  const items = skillItems;
</script>

<section aria-labelledby="skills-heading" class="w-full">
  <h2 id="skills-heading" class="sr-only">{$t("skills.title")}</h2>
  <div class="grid grid-cols-1 gap-3 lg:gap-5 md:grid-cols-2">
  {#each items as it, i (it.id)}
    <section
      aria-labelledby="skill-category-{it.id}"
      class="flex gap-3 animate__animated animate__backInUp animate__delay-{i +
        1}s"
    >
      <i aria-hidden="true" class="{it.icon} text-lg"></i>
      <div class="flex min-w-0 flex-col gap-3">
        <header class="space-y-1">
          <h3 id="skill-category-{it.id}" class="font-semibold">{$t(it.title)}</h3>
          <p class="text-xs">{$t(it.description)}</p>
        </header>
        <ul class="flex flex-wrap gap-2 md:gap-3 xl:gap-5">
          {#each it.items as d, idx (d.id)}
            <li class="relative flex flex-col items-center gap-1">
              <button
                type="button"
                aria-controls="skill-popover-{d.id}"
                popovertarget="skill-popover-{d.id}"
                style="anchor-name: --skill-{d.id}"
                class="flex flex-col justify-center items-center gap-1 cursor-pointer"
              >
                <span class="bg-white/80 hover:bg-slate-600 backdrop-blur-2xl rounded-full p-2 animate__animated animate__fadeInLeft animate__delay-{idx + 1}s">
                  <img src={d.image} alt="" class="h-6 w-6 rounded-xl" />
                </span>
                <span>{d.title}</span>
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
                  aria-label={$t("common.close")}>×</button
                >
                <h4 class="pr-5 font-semibold">{d.title}</h4>
                <p class="mt-2 text-sm leading-relaxed text-white/80">
                  {$t(`skills.item.${d.id}.description`)}
                </p>
                <div class="mt-4 flex flex-col gap-2">
                  <button type="button" popovertarget="skill-popover-{d.id}" popovertargetaction="hide" command="show-modal" commandfor="project-dialog" class="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200">{$t("skills.viewProjects")}</button>
                  <button type="button" popovertarget="skill-popover-{d.id}" popovertargetaction="hide" command="show-modal" commandfor="awards-dialog" class="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold hover:bg-white/10">{$t("person.awards.title")}</button>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  {/each}
  </div>
</section>
