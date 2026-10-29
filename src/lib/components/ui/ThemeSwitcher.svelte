<script lang="ts">
    import { t } from "../../i18n";

    let theme = $state<"light" | "dark">("light");

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }

    $effect(() => {
        const themeData = document.documentElement.getAttribute("data-theme");
        if (themeData) {
            theme = themeData === "light" ? "dark" : "light";
        }
    })
</script>

<button type="button" onclick={toggleTheme} aria-label={$t("common.toggleTheme")} class="text-2xl mt-1.5">
    {#if theme === "light"}
        <i aria-hidden="true" class="hgi hgi-stroke hgi-rounded hgi-sun-02"></i>
    {:else}
        <i aria-hidden="true" class="hgi hgi-stroke hgi-rounded hgi-moon-02"></i>
    {/if}
</button>
