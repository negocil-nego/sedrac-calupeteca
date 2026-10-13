import type { SkillCategory, SkillItem } from "./types";
import {
    aws,
    docker,
    gcp,
    java,
    laravel,
    mysql,
    nestjs,
    next,
    nuxt,
    php,
    postgresql,
    python,
    svelte,
    springBoot,
    sqlite,
    typescript,
} from "./skills";

const languageItems: SkillItem[] = [java, typescript, php, python];

export const frameworkItems: SkillItem[] = [
    springBoot,
    nestjs,
    laravel,
    svelte,
    nuxt,
    next,
];

const databaseItems: SkillItem[] = [postgresql, mysql, sqlite];

const devopsItems: SkillItem[] = [docker, gcp, aws];

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
