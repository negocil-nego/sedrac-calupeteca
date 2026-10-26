<script lang="ts">
  import GridPerson from "#lib/components/ui/GridPerson.svelte";
  import GridSection from "#lib/components/ui/GridSection.svelte";
  import GridSocialsNetwork from "#lib/components/ui/GridSocialsNetwork.svelte";
  import LanguageSwitcher from "#lib/components/ui/LanguageSwitcher.svelte";
  import ThemeSwitcher from "#lib/components/ui/ThemeSwitcher.svelte";
  import { t } from "../lib/i18n";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Clarity+City:ital,wght@0,100..900;1,100..900&display=swap");
    .clarity-city {
      font-family: "Clarity City", sans-serif;
      font-optical-sizing: auto;
      font-style: normal;
    }
  </style>
</svelte:head>
<main class="min-h-screen bg-background text-foreground">
  <header class="grid min-h-screen grid-cols-1 md:grid-cols-2 relative">
    <div class="order-2 flex flex-col gap-6 px-8 py-12 md:order-1 md:px-16">
      <hgroup>
        <h1
          class="text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl clarity-city animate__animated animate__slideInDown animate__delay-2s"
        >
          <span>Sedrac</span>
          <span>Lucas</span>
          <span>Calupeteca</span>
        </h1>
      </hgroup>

      <div
        class="md:w-125 xl:w-150 text-lg animate__animated animate__slideInDown"
      >
        {$t("homepage.develop.desc")}
      </div>

      <div>
        <GridPerson />
      </div>

      <div class="md:mt-5 lg:mt-10">
        <GridSocialsNetwork />
      </div>
    </div>

    <div
      class="relative order-1 min-h-[50vh] bg-[url('/image.jpeg')] bg-cover bg-top bg-no-repeat md:order-2 md:min-h-full"
      role="img"
      aria-label={$t("homepage.portrait")}
    >
      <div
        class="absolute inset-0 hidden bg-linear-to-r from-background to-transparent md:block"
      ></div>
      <div
        class="absolute inset-0 bg-linear-to-t from-background to-transparent md:hidden"
      ></div>

      <div class="absolute top-5 right-5">
        <div class="flex items-center justify-center gap-5">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  </header>
  <section
    class="pointer-events-none lg:absolute inset-x-0 bottom-6 z-10 flex justify-center px-4 md:bottom-10 md:px-10 pb-5"
  >
    <div class="pointer-events-auto w-full">
      <GridSection />
    </div>
  </section>
</main>
