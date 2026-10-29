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
    { src: "/aocpc/aocpc-01.jpeg", altKey: "person.awards.photo.aocpc01" },
    { src: "/aocpc/aocpc-02.jpeg", altKey: "person.awards.photo.aocpc02" },
    { src: "/aocpc/aocpc-03.jpeg", altKey: "person.awards.photo.aocpc03" },
    { src: "/aocpc/aocpc-04.jpeg", altKey: "person.awards.photo.aocpc04" },
    { src: "/aocpc/aocpc-05.jpeg", altKey: "person.awards.photo.aocpc05" },
    { src: "/aocpc/img1.jpeg", altKey: "person.awards.photo.ipukb01" },
    { src: "/aocpc/img2.jpeg", altKey: "person.awards.photo.ipukb02" },
    { src: "/aocpc/img3.jpeg", altKey: "person.awards.photo.aocpc06" },
  ];
</script>

<nav aria-label={$t("person.navigation")}>
<ul
  class="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full items-start justify-items-start"
>
  {#each items as it, i (it.id)}
    <li>
      <button
        class="w-31.25 h-30 bg-white/10 rounded-2xl space-y-1 cursor-pointer p-2 animate__animated animate__backInLeft animate__delay-{items.length -
          i}s"
        command="show-modal"
        commandfor="{it.id}-dialog"
      >
        <span class="flex flex-col items-start justify-start">
          <i aria-hidden="true" class="{it.icon} text-2xl lg:text-4xl"></i>
          <span class="text-left">{$t(it.title)}</span>
        </span>
      </button>
    </li>
  {/each}
</ul>
</nav>

<AboutMeDialog />
<CourseDialog />
<WorksDialog />
<ProjectDialog />
<AwardsDialog images={awardImages} />
