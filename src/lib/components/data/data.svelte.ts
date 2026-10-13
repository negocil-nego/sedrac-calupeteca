import type { SkillCategory, SkillItem } from "./types";

const languageItems: SkillItem[] = [
    {
        id: "java",
        image: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "typescript",
        image: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "php",
        image: "https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "python",
        image: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        title: "",
        description: "",
    },
];

const frameworkItems: SkillItem[] = [
    {
        id: "spring-boot",
        image: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "nestjs",
        image: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "laravel",
        image: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "svelte",
        image: "https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "nuxt",
        image: "https://img.icons8.com/?size=100&id=0ZKBQLFeVcPE&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "next",
        image: "https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=000000",
        title: "",
        description: "",
    },
];

const databaseItems: SkillItem[] = [
    {
        id: "postgresql",
        image: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "mysql",
        image: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "sqlite",
        image: "https://img.icons8.com/?size=100&id=yjSayFwWHyCo&format=png&color=000000",
        title: "",
        description: "",
    },
];

const devopsItems: SkillItem[] = [
    {
        id: "docker",
        image: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "gcp",
        image: "https://img.icons8.com/?size=100&id=fpGM2cINbbu4&format=png&color=000000",
        title: "",
        description: "",
    },
    {
        id: "aws",
        image: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
        title: "",
        description: "",
    },
];

export const skillItems: SkillCategory[] = [
    {
        id: "language",
        icon: "hgi hgi-stroke hgi-rounded hgi-laptop-programming",
        title: "skills.language.title",
        description: "skills.language.description",
        items: languageItems,
    },
    {
        id: "framework",
        icon: "hgi hgi-stroke hgi-rounded hgi-keyboard",
        title: "skills.framework.title",
        description: "skills.framework.description",
        items: frameworkItems,
    },
    {
        id: "database",
        icon: "hgi hgi-stroke hgi-rounded hgi-database",
        title: "skills.database.title",
        description: "skills.database.description",
        items: databaseItems,
    },
    {
        id: "devops",
        icon: "hgi hgi-stroke hgi-rounded hgi-chart-relationship",
        title: "skills.devops.title",
        description: "skills.devops.description",
        items: devopsItems,
    },
];
