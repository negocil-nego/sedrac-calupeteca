<script lang="ts">
    import { locale, localeStorageKey, locales, t } from "../../i18n";

    let isOpen = $state(false);

    const flagsLang: Record<string, string> = {
        pt: "lang.pt", en: "lang.en", fr: "lang.fr", ru: "lang.ru"
    };

    // código do país usado pelo flagcdn.com
    const flags: Record<string, string> = { pt: "br", en: "us", fr: "fr", ru: "ru" };

    const flagUrl = (lang: string) =>
        flags[lang] ? `https://flagcdn.com/w40/${flags[lang]}.png` : null;

    function selectLanguage(lang: string) {
        locale.set(lang);
        try {
            localStorage.setItem(localeStorageKey, lang);
        } catch {
            // Keep the selected language for this session when storage is unavailable.
        }
        isOpen = false;
    }
</script>

<div class="relative inline-block">
    <!-- Botão principal -->
    <button
        onclick={() => (isOpen = !isOpen)}
        aria-label={$t("common.selectLanguage")}
        aria-expanded={isOpen}
        class="flex items-center gap-1.5 rounded-full p-1 hover:opacity-75 focus:outline-none focus:ring-2"
    >
        {#if flagUrl($locale)}
            <img
                src={flagUrl($locale)}
                alt=""
                width="28"
                height="20"
                class="rounded-sm object-cover"
            />
        {:else}
            <span class="text-2xl">🌐</span>
        {/if}
    </button>

    <!-- Menu Dropdown -->
    {#if isOpen}
        <div class="absolute right-0 mt-2 w-36 bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-1 z-50">
            {#each locales as lang}
                <button
                    onclick={() => selectLanguage(lang)}
                    class="w-full flex items-center justify-between px-3 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 {$locale === lang ? 'font-semibold text-blue-600' : ''}"
                >
                    <span class="flex items-center gap-2">
                        {#if flagUrl(lang)}
                            <img
                                src={flagUrl(lang)}
                                alt=""
                                width="20"
                                height="14"
                                class="rounded-sm object-cover"
                            />
                        {:else}
                            <span>🌐</span>
                        {/if}
                        <span>{$t(flagsLang[lang]) ?? lang}</span>
                    </span>
                    {#if $locale === lang}<span>✓</span>{/if}
                </button>
            {/each}
        </div>
    {/if}
</div>
