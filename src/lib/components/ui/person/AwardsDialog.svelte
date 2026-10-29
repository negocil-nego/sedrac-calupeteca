<script lang="ts">
  import { t } from "../../../i18n";

  let { images }: { images: { src: string; altKey: string }[] } = $props();
  const competitionAwards = ["2017", "2018", "2019"];
  const aocpcAwards = ["2019", "2020", "2021-2022"];
</script>

<dialog
  id="awards-dialog"
  class="awards-dialog"
  aria-labelledby="awards-title"
  onclick={(event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }}
>
  <div class="flex h-full flex-col p-5 md:p-8">
    <header class="flex items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-widest text-accent">{$t("person.awards.eyebrow")}</p>
        <h2 id="awards-title" class="mt-1 text-xl font-bold md:text-2xl">{$t("person.awards.title")}</h2>
        <p class="mt-2 max-w-4xl text-sm text-foreground/80">{$t("person.awards.intro")}</p>
      </div>
      <button type="button" command="close" commandfor="awards-dialog" aria-label={$t("common.close")} class="shrink-0 rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/10 hover:text-foreground">
        <i class="hgi hgi-stroke hgi-rounded hgi-cancel-01 text-xl"></i>
      </button>
    </header>

    <div class="mt-6 min-h-0 flex-1 space-y-8 overflow-y-auto pr-1">
      <section aria-labelledby="ipukb-awards-title">
        <h3 id="ipukb-awards-title" class="text-lg font-semibold">{$t("person.awards.ipukb.title")}</h3>
        <p class="mt-1 text-sm text-foreground/75">{$t("person.awards.ipukb.description")}</p>
        <div class="mt-4 grid gap-3 md:grid-cols-3">
          {#each competitionAwards as year (year)}
            <article class="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 class="font-semibold">{$t(`person.awards.ipukb.${year}.title`)}</h4>
              <dl class="mt-3 space-y-2 text-sm">
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.team")}</dt><dd>{year === "2017" ? "Lambda" : "XZ"}</dd></div>
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.year")}</dt><dd>{year}</dd></div>
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.rank")}</dt><dd>{$t("person.awards.rank.first")}</dd></div>
              </dl>
            </article>
          {/each}
        </div>
      </section>

      <section aria-labelledby="fair-awards-title">
        <h3 id="fair-awards-title" class="text-lg font-semibold">{$t("person.awards.fair.title")}</h3>
        <p class="mt-1 text-sm text-foreground/75">{$t("person.awards.fair.description")}</p>
        <article class="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 class="font-semibold">{$t("person.awards.fair.project")}</h4>
          <p class="mt-1 text-sm text-foreground/75">{$t("person.awards.fair.projectDescription")}</p>
          <p class="mt-2 text-sm"><span class="font-medium">{$t("person.awards.rank")}:</span> {$t("person.awards.rank.first")}</p>
        </article>
      </section>

      <section aria-labelledby="aocpc-awards-title">
        <h3 id="aocpc-awards-title" class="text-lg font-semibold">{$t("person.awards.aocpc.title")}</h3>
        <p class="mt-1 text-sm text-foreground/75">{$t("person.awards.aocpc.description")}</p>
        <div class="mt-4 grid gap-3 md:grid-cols-3">
          {#each aocpcAwards as year (year)}
            <article class="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 class="font-semibold">AOCPC {year}</h4>
              <dl class="mt-3 space-y-2 text-sm">
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.institution")}</dt><dd class="text-right">Universidade Katyavala Bwila</dd></div>
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.team")}</dt><dd>{year === "2020" ? "IP/UKB_01" : year === "2021-2022" ? "Sparta" : "—"}</dd></div>
                <div class="flex justify-between gap-3"><dt class="font-medium">{$t("person.awards.rank")}</dt><dd>{$t(year === "2019" ? "person.awards.rank.fourteenth" : "person.awards.rank.seventh")}</dd></div>
              </dl>
            </article>
          {/each}
        </div>
      </section>

      <section aria-label={$t("person.awards.gallery")}>
        <h3 class="mb-3 text-lg font-semibold">{$t("person.awards.gallery")}</h3>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {#each images as image (image.src)}
            <a href={image.src} target="_blank" rel="noreferrer" class="group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent">
              <figure>
                <img src={image.src} alt={$t(image.altKey)} loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" />
              </figure>
            </a>
          {/each}
        </div>
      </section>
    </div>
  </div>
</dialog>
