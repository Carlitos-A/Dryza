// Registro de íconos del proyecto. Los SVG viven en `src/assets/icons/` y se
// importan en crudo (`?raw`) para inyectarlos inline y poder pintarlos con
// `currentColor` vía Tailwind (`text-*`). Para añadir un ícono: crea el
// archivo en `assets/icons/` y regístralo aquí con el mismo nombre.
import arrowRight from "../../assets/icons/arrow-right.svg?raw";
import chat from "../../assets/icons/chat.svg?raw";
import check from "../../assets/icons/check.svg?raw";
import chevronsHorizontal from "../../assets/icons/chevrons-horizontal.svg?raw";
import clock from "../../assets/icons/clock.svg?raw";
import dropletOff from "../../assets/icons/droplet-off.svg?raw";
import feather from "../../assets/icons/feather.svg?raw";
import gmail from "../../assets/icons/gmail.svg?raw";
import grid from "../../assets/icons/grid.svg?raw";
import imagePlaceholder from "../../assets/icons/image-placeholder.svg?raw";
import imessage from "../../assets/icons/imessage.svg?raw";
import instagram from "../../assets/icons/instagram.svg?raw";
import layers from "../../assets/icons/layers.svg?raw";
import mail from "../../assets/icons/mail.svg?raw";
import send from "../../assets/icons/send.svg?raw";
import shieldCheck from "../../assets/icons/shield-check.svg?raw";
import whatsapp from "../../assets/icons/whatsapp.svg?raw";

export const icons = {
	"arrow-right": arrowRight,
	chat,
	check,
	"chevrons-horizontal": chevronsHorizontal,
	clock,
	"droplet-off": dropletOff,
	feather,
	// Iconos de marca a todo color (llevan sus propios fills; no heredan
	// currentColor). Se usan en el selector de canales de /contacto.
	gmail,
	grid,
	"image-placeholder": imagePlaceholder,
	imessage,
	instagram,
	layers,
	mail,
	send,
	"shield-check": shieldCheck,
	whatsapp,
} as const;

export type IconName = keyof typeof icons;
