<script lang="ts">
    import { t } from "../../../i18n";
    import { laravel, nestjs, next, springBoot } from "../../data/skills";
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="works-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-computer-desk-02"
    title={$t("person.works.title")}
>
    <ul class="space-y-5">
        <ListItem
            title="Bitkabir"
            subtitle={$t("person.works.developer")}
            period="2023 — 2026"
            description={$t("person.works.item1.description")}
            skills={[nestjs, next]}
        />
        <ListItem
            title="Luzkabir"
            subtitle={$t("person.works.developer")}
            period="2022 — 2024"
            description={$t("person.works.item2.description")}
            skills={[laravel, springBoot, next]}
        />
        <ListItem
            title="GQS, Luanda"
            subtitle={$t("person.works.developer")}
            period={$t("person.works.item3.period")}
            description={$t("person.works.item3.description")}
            skills={[laravel]}
        />
        <ListItem
            title="Reitoria da Universidade Katyavala Bwila"
            subtitle={$t("person.works.item4.role")}
            period={$t("person.works.item4.period")}
            description={$t("person.works.item4.description")}
        />
    </ul>
</Drawer>
