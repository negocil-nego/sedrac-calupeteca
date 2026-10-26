<script lang="ts">
  import { t } from "../../i18n";
  import { topicsItems } from "../data/person.svelte";
  import AboutMeDialog from "./person/AboutMeDialog.svelte";
  import CourseDialog from "./person/CourseDialog.svelte";
  import WorksDialog from "./person/WorksDialog.svelte";
  import ProjectDialog from "./person/ProjectDialog.svelte";
  import AwardsDialog from "./person/AwardsDialog.svelte";

  const items = topicsItems;
  const awardImages = [
    "/aocpc/aocpc-01.jpeg",
    "/aocpc/aocpc-02.jpeg",
    "/aocpc/aocpc-03.jpeg",
    "/aocpc/aocpc-04.jpeg",
    "/aocpc/aocpc-05.jpeg",
    "/aocpc/img1.jpeg",
    "/aocpc/img2.jpeg",
    "/aocpc/img3.jpeg",
  ];
</script>

<section
  class="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full items-start justify-items-start"
>
  {#each items as it, i (it.id)}
    <button
      class="w-31.25 h-30 bg-white/10 rounded-2xl space-y-1 cursor-pointer p-2 animate__animated animate__backInLeft animate__delay-{items.length -
        i}s"
      command="show-modal"
      commandfor="{it.id}-dialog"
    >
      <div class="flex flex-col items-start justify-start">
        <div>
          <i class="{it.icon} text-2xl lg:text-4xl"></i>
        </div>
        <div class="text-left">{$t(it.title)}</div>
      </div>
    </button>
  {/each}
</section>

<AboutMeDialog />
<CourseDialog />
<WorksDialog />
<ProjectDialog />
<AwardsDialog images={awardImages} />
