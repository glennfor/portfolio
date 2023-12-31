import tutorialHell from './md/writing/tutorial-hell.md?raw';
import type { Writing } from "./types";




const WRITINGS: Array<Writing> = [
    {
        featured: "https://picsum.photos/200",
        slug: "tutorial-hell",
        title: "Tutorial hell - A personal experience", //fix and use as slugs
        shortDescription: "Consuming is easy. Ideas are cheap. Execution is everything.",
        datePublished: new Date(2023, 11, 31),
        content: tutorialHell,
        tags: ["Learning", "Growing"]
    },
]


export default WRITINGS;