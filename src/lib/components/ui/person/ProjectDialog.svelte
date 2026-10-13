<script lang="ts">
    import { flutter, laravel, nestjs, next, sqlite } from "../../data/skills";
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="project-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-hierarchy-files"
    title="Projectos"
>
    <ul class="space-y-5">
        <ListItem
            title="Aplicação mobile Hinário IECA"
            description="Aplicação mobile que reúne numa coletânea digital hinos e canções de igrejas evangélicas, permitindo aos utilizadores consultar os seus hinos de forma simples e rápida."
            type="mobile"
            link={"https://play.google.com/store/apps/details?id=com.negocil.ieca_hinario.mobile&pcampaignid=web_share"}
            skills={[flutter, sqlite]}
        />
        <ListItem
            title="Aplicação mobile Tudkabir"
            description="Aplicação mobile da plataforma web Tudkabir, desenvolvida para disponibilizar os principais serviços da plataforma em dispositivos móveis."
            type="mobile"
            link={"https://play.google.com/store/apps/details?id=com.bitkabir.tudkabir&pcampaignid=web_share"}
            skills={[flutter]}
        />
        <ListItem
            title="Website Tudkabir"
            description="Plataforma web criada para negócios entre empresas (B2B) no território africano, oferecendo um ambiente digital onde as empresas podem divulgar e gerir as suas operações comerciais."
            type="website"
            link="https://tudkabir.com/"
            skills={[next, nestjs]}
        />
        <ListItem
            title="Website Luzkabir"
            description="Primeira versão do website da Luzkabir, desenvolvida para apresentar os serviços da empresa e viabilizar a venda dos seus produtos em linha."
            type="website"
            link="https://luzkabir.co.ao/"
            skills={[laravel]}
        />
        <ListItem
            title="Website Bumbaki"
            description="Plataforma web dedicada à contratação de prestadores de serviços, que aproxima quem procura um serviço dos profissionais disponíveis para o executar."
            type="website"
            link="https://bumbaki.com/"
            skills={[next, flutter]}
        />
        <ListItem
            title="Plataforma Forlean"
            description="Plataforma desenvolvida para a gestão de instituições de ensino superior, com o objetivo de simplificar os processos académicos e administrativos."
            type="website"
            link="https://www.forlearn.ao/"
            skills={[laravel]}
        />
    </ul>
</Drawer>
