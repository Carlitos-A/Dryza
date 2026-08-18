// Registro de íconos del proyecto. Los SVG viven en `src/assets/icons/` y se
// importan en crudo (`?raw`) para inyectarlos inline y poder pintarlos con
// `currentColor` vía Tailwind (`text-*`). Para añadir un ícono: crea el
// archivo en `assets/icons/` y regístralo aquí con el mismo nombre.
import arrowRight from "../../assets/icons/arrow-right.svg?raw";
import check from "../../assets/icons/check.svg?raw";
import chevronsHorizontal from "../../assets/icons/chevrons-horizontal.svg?raw";
import clock from "../../assets/icons/clock.svg?raw";
import dropletOff from "../../assets/icons/droplet-off.svg?raw";
import feather from "../../assets/icons/feather.svg?raw";
import grid from "../../assets/icons/grid.svg?raw";
import imagePlaceholder from "../../assets/icons/image-placeholder.svg?raw";
import layers from "../../assets/icons/layers.svg?raw";
import shieldCheck from "../../assets/icons/shield-check.svg?raw";

export const icons = {
	"arrow-right": arrowRight,
	check,
	"chevrons-horizontal": chevronsHorizontal,
	clock,
	"droplet-off": dropletOff,
	feather,
	grid,
	"image-placeholder": imagePlaceholder,
	layers,
	"shield-check": shieldCheck,
} as const;

export type IconName = keyof typeof icons;
