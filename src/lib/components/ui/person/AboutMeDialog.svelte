<script lang="ts">
    import { t } from "../../../i18n";
    import Drawer from "../Drawer.svelte";
</script>

<Drawer
    id="about-me-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-user-03"
    title={$t("person.about.title")}
>
    <div class="space-y-3 md:space-y-5 lg:space-y-8">
        <p class="leading-relaxed">
            {$t("person.about.p1")}
        </p>

        <p class="leading-relaxed">
            {$t("person.about.p2")}
        </p>

        <p class="leading-relaxed">
            {$t("person.about.p3")}
        </p>
    </div>
</Drawer>
