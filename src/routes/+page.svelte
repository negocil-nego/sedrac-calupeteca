<script lang="ts">
    import ThemeSwitcher from "#lib/components/ThemeSwitcher.svelte";
    import { t } from "../lib/i18n";
</script>
<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Clarity+City:ital,wght@0,100..900;1,100..900&display=swap');

        .clarity-city {
            font-family: "Clarity City", sans-serif;
            font-optical-sizing: auto;
            font-weight: <weight>;
            font-style: normal;
        }
    </style>
</svelte:head>
<main class="min-h-screen bg-background text-foreground">
    <header class="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div
            class="order-2 flex flex-col justify-center gap-6 px-8 py-12 md:order-1 md:px-16"
        >
            <hgroup>
                <h1 class="text-5xl font-bold tracking-tight md:text-7xl clarity-city">
                    <span>Sedrac</span>
                    <span>Lucas</span>
                    <span>Calupeteca</span>
                </h1>
            </hgroup>

            <div
                class="w-fit rounded-full bg-accent px-4 py-1 text-sm font-medium text-on-accent"
            >
                {$t("homepage.develop")}
            </div>

            <div class="md:w-125 text-lg md:text-xl">
                Sou um professional na area de desenvolvimento de software, analase de desenho, e se professionalizando na em devops
            </div>
        </div>

        <div
            class="relative order-1 min-h-[50vh] bg-[url('/image.jpeg')] bg-cover bg-top bg-no-repeat md:order-2 md:min-h-full"
            role="img"
            aria-label="Retrato"
        >
            <div
                class="absolute inset-0 hidden bg-linear-to-r from-background to-transparent md:block"
            ></div>
            <div
                class="absolute inset-0 bg-linear-to-t from-background to-transparent md:hidden"
            ></div>

            <div class="absolute">
                <ThemeSwitcher/>
            </div>
        </div>
    </header>
</main>
