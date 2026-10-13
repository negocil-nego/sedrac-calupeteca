<script lang="ts">
    import Drawer from "../Drawer.svelte";
    import ListItem from "../ListItem.svelte";
</script>

<Drawer
    id="course-dialog"
    icon="hgi hgi-stroke hgi-rounded hgi-graduation-cap"
    title="Formação acadêmica"
>
    <ul class="space-y-5 md:space-y-7">
        <ListItem
            title="Ensino Superior em Ciências da Computação"
            subtitle="Instituto Politécnico da Universidade Katyavala Bwila (IP-UKB)"
            period="2017 à 2022"
            type="Licenciatura"
        />
        <ListItem
            title="Ensino Secundário em Ciências Físicas e Biológicas"
            subtitle="Escola Católica São José, Luanda"
            period="2014 à 2016"
            type="Ensino Médio"
        />
        <ListItem
            title="Curso de Conceitos Básicos de Redes de Computadores"
            subtitle="Centro Integrado de Formação Tecnológica (CINFOTEC)"
            type="Curso técnico"
        />
        <ListItem
            title="Curso de Informática na Óptica do Utilizador"
            subtitle="Centro Integrado de Formação Tecnológica (CINFOTEC)"
            type="Curso técnico"
        />
    </ul>
</Drawer>
