import type { TopicItem } from "./types";

export const topicsItems: TopicItem[] = [
    {
        id: "about-me",
        icon: "hgi hgi-stroke hgi-rounded hgi-user-03",
        title: "Sobre mim"
        // para abrir o AboutMeDialog
    },
    {
        id: "course",
        icon: "hgi hgi-stroke hgi-rounded hgi-graduation-cap",
        title: "Formação acadêmica"
        // para abrir o CourseDialog
    },
    {
        id: "works",
        icon: "hgi hgi-stroke hgi-rounded hgi-computer-desk-02",
        title: "Experiências de trabalho"
        // para abrir o WorksDialog
    },    
    {
        id: "project",
        icon: "hgi hgi-stroke hgi-rounded hgi-hierarchy-files",
        title: "Projectos"
        // para abrir o ProjectDialog
    },      
];