<script lang="ts">
    import { t } from "../../../i18n";
    import { flutter, laravel, nestjs, next, sqlite } from "../../data/skills";
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="project-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-hierarchy-files"
    title={$t("person.project.title")}
>
    <ul class="space-y-5">
        <ListItem
            title={$t("person.project.item1.title")}
            description={$t("person.project.item1.description")}
            type={$t("common.mobile")}
            link={"https://play.google.com/store/apps/details?id=com.negocil.ieca_hinario.mobile&pcampaignid=web_share"}
            skills={[flutter, sqlite]}
        />
        <ListItem
            title={$t("person.project.item2.title")}
            description={$t("person.project.item2.description")}
            type={$t("common.mobile")}
            link={"https://play.google.com/store/apps/details?id=com.bitkabir.tudkabir&pcampaignid=web_share"}
            skills={[flutter]}
        />
        <ListItem
            title={$t("person.project.item3.title")}
            description={$t("person.project.item3.description")}
            type={$t("common.website")}
            link="https://tudkabir.com/"
            skills={[next, nestjs]}
        />
        <ListItem
            title={$t("person.project.item4.title")}
            description={$t("person.project.item4.description")}
            type={$t("common.website")}
            link="https://luzkabir.co.ao/"
            skills={[laravel]}
        />
        <ListItem
            title={$t("person.project.item5.title")}
            description={$t("person.project.item5.description")}
            type={$t("common.website")}
            link="https://bumbaki.com/"
            skills={[next, flutter]}
        />
        <ListItem
            title={$t("person.project.item6.title")}
            description={$t("person.project.item6.description")}
            type={$t("common.website")}
            link="https://www.forlearn.ao/"
            skills={[laravel]}
        />
    </ul>
</Drawer>
