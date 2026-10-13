<script lang="ts">
    let theme = $state<"light" | "dark">("light");

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<button type="button" onclick={toggleTheme} aria-label="Alternar tema" class="text-2xl mt-1.5">
    {#if theme === "light"}
        <i class="hgi hgi-stroke hgi-rounded hgi-sun-02"></i>
    {:else}
        <i class="hgi hgi-stroke hgi-rounded hgi-moon-02"></i>
    {/if}
</button>