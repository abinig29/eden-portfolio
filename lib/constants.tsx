
export const links = [
    {
        name: "About",
        href: "/about",
        isA: false
    },

    {
        name: "Resume",
        href: "/CV.pdf",
        isA: true
    },


] as const;
export const projectsData = [
    {
        title: "Teraki app",
        description:
            "mobi",
        tags: ["React", "Express.js", "MongoDB", "Tailwind", "RTK query"],
        imageUrl: '/images/p7.jpg',
        href: '/teraki'
    },
    {
        title: "5Kilo Bookclub",
        description:
            "This is the first project i made after I learn tailwind css. ",
        tags: ["React", "Tailwind", "Context api"],
        imageUrl: '/images/p12.jpg',

        href: '/book-club'
    },
    {
        title: "Sink",
        description:
            "Vent is website where users can talk about what they feel. It has many features including saving vent, liking, supporting, filtering user.",
        tags: ["React", "Redux toolkit", "Express.js", "Material UI", "MongoDB"],
        imageUrl: '/images/p9.jpg',

        href: '/sink'
    },
    {
        title: "Utopia",
        description:
            "This was school project. it is made for tourists where they can find place to visit",
        tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
        imageUrl: '/images/p13.jpg',
        href: '/utopia'
    },
] as const;
