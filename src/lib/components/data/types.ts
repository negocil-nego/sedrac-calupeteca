export interface SkillItem {
    id: string;
    image: string;
    title: string;
    description: string;
}

export interface SkillCategory {
    id: string;
    icon: string;
    title: string;
    description: string;
    items: SkillItem[];
}
