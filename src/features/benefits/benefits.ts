// Benefit copy and icon names for the Benefits section.
// Icons are reusable SVGs from `src/assets/icons/`, rendered via
// `src/shared/ui/Icon.astro` and colored with `currentColor`.

import type { IconName } from "../../shared/ui/icons";

export interface Benefit {
	title: string;
	description: string;
	icon: IconName;
}

export const featuredBenefit = {
	stat: "< 24 h",
	title: "Installed in under 24 hours",
	description:
		"Installation is completed in less than 24 hours — fast and clean, with no demolition or wall reconstruction required.",
	points: [
		"Fast and clean installation",
		"No demolition required",
		"No wall reconstruction",
	],
	icon: "clock",
} satisfies Benefit & { stat: string; points: string[] };

export const benefits: Benefit[] = [
	{
		title: "Eliminates wall humidity",
		description:
			"The panel system seals damp walls and stops moisture at its source, keeping surfaces dry for good.",
		icon: "droplet-off",
	},
	{
		title: "Prevents stains and odors",
		description:
			"Blocks the mold and mildew that cause dark stains and musty smells, so rooms stay fresh.",
		icon: "shield-check",
	},
	{
		title: "Lightweight but durable",
		description:
			"Easy to handle and quick to mount, yet engineered to keep its finish for years.",
		icon: "feather",
	},
	{
		title: "Thermal and acoustic insulation",
		description:
			"Adds a layer of thermal and acoustic comfort, making every room quieter and more temperate.",
		icon: "layers",
	},
	{
		title: "Modern decorative designs",
		description:
			"A collection of contemporary finishes that turns a problem wall into a design feature.",
		icon: "grid",
	},
];
