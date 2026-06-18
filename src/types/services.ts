

export interface Service {
    slug: string;
    title: string;

    slugCat?: string;
    titleCat?: string;
    icon?:string;
    meta?: {
        title: string;
        description: string;
        keywords: string;
    };

    content: ServiceContent;
}


export interface ServiceContent {
    hero?: {
        title: string;
        description: string;
    };
    advantages?: Advantages;
    packages?: Packages;
    teams?: Teams;
    faq?: Faq;
}

export interface Advantages {
    title: string;
    items: {
        icon?:string;
        title: string;
        description: string;
    }[];
}


export interface Packages {
    title: string;
    items: Package[];
}

export interface Package {
    id: string;
    title: string;
    description?: string;
    features: string[];
    timeline: string;
    price: string;
    popupTitle?: string;
}


export interface Faq {
    title?: string;
    items: {
        question: string;
        answer: string;
    }[];
}


export interface Teams {
    title: string;
    items: {
        key: string;
        role: string;
    }[];
}
