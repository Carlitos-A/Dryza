import type { ImageMetadata } from "astro";

export interface PanelDesign {
	slug: string;
	name: string;
	tag: string;
	paragraphs: string[];
}

export const designs: PanelDesign[] = [
	{
		slug: "aura",
		name: "Aura",
		tag: "Geometric relief",
		paragraphs: [
			"The Aura panel is a decorative ceiling tile featuring a three-dimensional geometric design that combines contemporary elegance with a distinctive architectural character. Its central star-shaped relief creates a dynamic play of light and shadow, adding visual depth and a refined sense of sophistication to any space.",
			"This design conveys a modern, refined, and luminous aesthetic, ideal for environments that aim to stand out with personality while maintaining visual harmony.",
			"Designed for ceilings or decorative surface applications, the Aura Star panel transforms ordinary surfaces into a striking visual element, elevating the overall perception of the space with a clean and structured style.",
		],
	},
	{
		slug: "diamonds",
		name: "Diamonds",
		tag: "Faceted brilliance",
		paragraphs: [
			"The Diamonds panel is a decorative ceiling tile featuring a sophisticated geometric design inspired by the brilliance and symmetry of cut diamonds. Its multidirectional relief pattern creates a striking play of light and shadow, adding depth, texture, and visual movement to any interior space.",
			"The faceted lines radiate from each corner toward the center, evoking the elegance and precision found in fine gemstones. This design gives ceilings a luxurious, modern, and architectural presence, turning an ordinary surface into a refined visual statement.",
			"The Diamonds panel brings a sense of brilliance and structure to interiors, making spaces feel more dynamic, elegant, and elevated.",
		],
	},
	{
		slug: "rio",
		name: "Río",
		tag: "Fluid movement",
		paragraphs: [
			"The Río panel is a decorative ceiling tile featuring a three-dimensional design inspired by the natural movement of flowing water. Its curved embossed lines create a fluid pattern that evokes the gentle motion of river currents, producing a refined play of light and shadow that adds depth and visual movement to any space.",
			"The design conveys a sense of continuous flow, balance, and harmony, transforming the ceiling into an architectural feature full of character. The wave-like composition introduces a contemporary aesthetic that softens interiors and creates spaces that feel modern, calm, and sophisticated.",
			"The Río panel transforms simple surfaces into a visually engaging element where texture and design come together to elevate the overall atmosphere of the space.",
		],
	},
	{
		slug: "isla",
		name: "Isla",
		tag: "Minimal texture",
		paragraphs: [
			"The Isla panel is a decorative ceiling tile featuring a clean and minimal design highlighted by a subtle radial texture. Inspired by the calm simplicity of natural landscapes, its soft relief creates a gentle play of light that adds depth without overwhelming the space.",
			"Unlike more ornamental designs, Isla offers a discreet and elegant aesthetic, making it ideal for environments that seek a clean, bright, and balanced appearance without overly decorative elements.",
			"This model is perfect for projects where functionality and material performance are the priority, especially in spaces that require moisture-resistant technology, while maintaining a simple and refined visual style.",
			"The Isla panel proves that simplicity can still create visual impact, transforming ordinary ceilings into surfaces that feel modern, harmonious, and naturally elegant.",
		],
	},
	{
		slug: "mediterraneo",
		name: "Mediterráneo",
		tag: "Framed elegance",
		paragraphs: [
			"The Mediterráneo panel is a decorative ceiling tile featuring a refined and balanced design inspired by the timeless architecture of Mediterranean coastal regions. Its geometric framed relief creates a clean and structured composition that adds visual depth while maintaining a calm and elegant appearance.",
			"The smooth center allows the surrounding textured frame to subtly capture light, producing a sophisticated visual effect that conveys harmony, balance, and understated elegance.",
			"This model blends classic and contemporary aesthetics, making it an excellent choice for interiors that seek elegance without excessive ornamentation. The Mediterráneo panel transforms simple ceilings into architectural surfaces with presence and refined character.",
		],
	},
];

// Panel artwork is resolved from the filename (without extension) matching a
// design's slug. Drop an SVG named after a slug (e.g. `aura.svg`) into
// src/assets/images/panels/ and it replaces the placeholder — no code changes.
const panelImages = import.meta.glob<{ default: ImageMetadata }>(
	"../../assets/images/panels/*.svg",
	{ eager: true },
);

export function getPanelImage(slug: string): ImageMetadata | undefined {
	const match = Object.entries(panelImages).find(([path]) => {
		const filename = path.split("/").pop() ?? "";
		return filename.replace(/\.[^.]+$/, "") === slug;
	});

	return match?.[1].default;
}
