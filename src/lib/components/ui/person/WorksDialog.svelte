<script lang="ts">
    import { laravel, nestjs, next, springBoot } from "../../data/skills";
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="works-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-computer-desk-02"
    title="Experiências de trabalho"
>
    <ul class="space-y-5">
        <ListItem
            title="Bitkabir"
            subtitle="Desenvolvedor de software"
            period="2023 à 2026"
            description="Atuei como programador fullstack na construção da plataforma Tudkabir, com participação de forma integral no desenvolvimento da aplicação web e parcial no desenvolvimento mobile (Flutter)."
            skills={[nestjs, next]}
        />
        <ListItem
            title="Luzkabir"
            subtitle="Desenvolvedor de software"
            period="2022 à 2024"
            description="Desenvolvi a primeira versão do website da empresa, atuando em todas as fases do projeto, do backend ao frontend."
            skills={[laravel, springBoot, next]}
        />
        <ListItem
            title="GQS, Luanda"
            subtitle="Desenvolvedor de software"
            period="Agosto 2021 à 2022"
            description="Atuei como programador fullstack na GQS (Grupo Queiroz Saldanha) na manutenção e evolução da plataforma forlearn, com intervenções no desenvolvimento de funcionalidades e na correção de problemas."
            skills={[laravel]}
        />
        <ListItem
            title="Reitoria da Universidade Katyavala Bwila"
            subtitle="Estagiário (Departamento de TI)"
            period="Junho à Novembro 2020"
            description="Estágio no departamento de TI da Reitoria da Universidade Katyavala Bwila, com programação, manutenção de computadores e apoio aos colaboradores no uso do pacote Office."
        />
    </ul>
</Drawer>
