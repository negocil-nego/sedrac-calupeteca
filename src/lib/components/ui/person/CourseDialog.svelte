<script lang="ts">
    import { t } from "../../../i18n";
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="course-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-graduation-cap"
    title={$t("person.course.title")}
>
    <ul class="space-y-5 md:space-y-7">
        <ListItem
            title={$t("person.course.item1.title")}
            subtitle="Instituto Politécnico da Universidade Katyavala Bwila (IP-UKB)"
            period={$t("person.course.item1.period")}
            type={$t("person.course.item1.type")}
        />
        <ListItem
            title={$t("person.course.item2.title")}
            subtitle="Escola Católica São José, Luanda"
            period={$t("person.course.item2.period")}
            type={$t("person.course.item2.type")}
        />
        <ListItem
            title={$t("person.course.item3.title")}
            subtitle="Centro Integrado de Formação Tecnológica (CINFOTEC)"
            type={$t("person.course.item3.type")}
        />
        <ListItem
            title={$t("person.course.item4.title")}
            subtitle="Centro Integrado de Formação Tecnológica (CINFOTEC)"
            type={$t("person.course.item4.type")}
        />
    </ul>
</Drawer>
