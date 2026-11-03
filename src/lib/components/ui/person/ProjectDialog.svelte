<script lang="ts">
  import { t } from "../../../i18n";
  import {
    firebase,
    flutter,
    laravel,
    mysql,
    nestjs,
    next,
    postgresql,
    sqlite,
    supabase,
  } from "../../data/skills";
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
      title={$t("person.project.offerProcura.title")}
      description={$t("person.project.offerProcura.description")}
      type={$t("common.mobile")}
      link={"https://play.google.com/store/apps/details?id=com.ofertaprocura.ao&pcampaignid=web_share"}
      skills={[flutter, supabase]}
    />
    <ListItem
      title={$t("person.project.hinario.title")}
      description={$t("person.project.hinario.description")}
      type={$t("common.mobile")}
      link={"https://play.google.com/store/apps/details?id=com.negocil.ieca_hinario.mobile&pcampaignid=web_share"}
      skills={[flutter, sqlite]}
    />
    <ListItem
      title={$t("person.project.tudkabirApp.title")}
      description={$t("person.project.tudkabirApp.description")}
      type={$t("common.mobile")}
      link={"https://play.google.com/store/apps/details?id=com.bitkabir.tudkabir&pcampaignid=web_share"}
      skills={[flutter]}
    />
    <ListItem
      title={$t("person.project.tudkabirWebsite.title")}
      description={$t("person.project.tudkabirWebsite.description")}
      type={$t("common.website")}
      link="https://tudkabir.com/"
      skills={[next, nestjs, postgresql]}
    />
    <ListItem
      title={$t("person.project.luzkabirWebsite.title")}
      description={$t("person.project.luzkabirWebsite.description")}
      type={$t("common.website")}
      link="https://luzkabir.co.ao/"
      skills={[laravel, mysql]}
    />
    <ListItem
      title={$t("person.project.bumbakiWebsite.title")}
      description={$t("person.project.bumbakiWebsite.description")}
      type={$t("common.website")}
      link="https://bumbaki.com/"
      skills={[next, flutter, supabase, firebase]}
    />
    <ListItem
      title={$t("person.project.forlearnPlatform.title")}
      description={$t("person.project.forlearnPlatform.description")}
      type={$t("common.website")}
      link="https://www.forlearn.ao/"
      skills={[laravel, mysql]}
    />
  </ul>
</Drawer>
