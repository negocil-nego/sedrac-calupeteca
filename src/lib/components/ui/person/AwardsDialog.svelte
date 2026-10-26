<script lang="ts">
  import { t } from "../../../i18n";

  let { images }: { images: string[] } = $props();
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
        <p class="text-sm font-semibold uppercase tracking-widest text-accent">Conquistas</p>
        <h2 id="awards-title" class="mt-1 text-xl font-bold md:text-2xl">
          Prémios e participação em competições
        </h2>
        <p class="mt-2 max-w-3xl text-sm text-foreground/80">
          Participação em campeonatos de programação do IP-UKB e no concurso nacional AOCP,
          representando a Universidade de Kayavala Bwila.
        </p>
      </div>
      <button
        type="button"
        command="close"
        commandfor="awards-dialog"
        aria-label={$t("common.close")}
        class="shrink-0 rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <i class="hgi hgi-stroke hgi-rounded hgi-cancel-01 text-xl"></i>
      </button>
    </header>

    <div class="mt-6 min-h-0 flex-1 overflow-y-auto">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {#each images as image, index (image)}
          <a
            href={image}
            target="_blank"
            rel="noreferrer"
            class="group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Abrir fotografia de prémio {index + 1}"
          >
            <img
              src={image}
              alt="Momento de competição ou prémio de programação {index + 1}"
              loading="lazy"
              class="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</dialog>
