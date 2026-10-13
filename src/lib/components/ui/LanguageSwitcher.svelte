<script lang="ts">
    import { locale, locales } from "../../i18n";

    let isOpen = $state(false);

    const flags: Record<string, string> = { pt: "🇧🇷", en: "🇺🇸" };

    function selectLanguage(lang: string) {
        locale.set(lang);
        isOpen = false;
    }
</script>

<div class="relative inline-block">
    <!-- Botão principal -->
    <button
        onclick={() => (isOpen = !isOpen)}
        aria-label="Selecionar idioma"
        class="gap-1.5 rounded-full hover:opacity-75 focus:outline-none focus:ring-2"
    >
        <span class="text-2xl">{flags[$locale] || "🌐"}</span>
    </button>

    <!-- Menu Dropdown -->
    {#if isOpen}
        <div class="absolute right-0 mt-2 w-36 bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 z-50">
            {#each locales as lang}
                <button
                    onclick={() => selectLanguage(lang)}
                    class="w-full flex items-center justify-between px-3 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 {$locale === lang ? 'font-semibold text-blue-600' : ''}"
                >
                    <span class="flex items-center gap-2">
                        <span>{flags[lang] || "🌐"}</span>
                        <span class="uppercase">{lang}</span>
                    </span>
                    {#if $locale === lang}<span>✓</span>{/if}
                </button>
            {/each}
        </div>
    {/if}
</div>