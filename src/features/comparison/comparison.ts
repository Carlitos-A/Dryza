import type { ImageMetadata } from "astro";

// Las dos fotos del comparador se resuelven por carpeta, no por nombre de
// archivo: la primera imagen (orden alfabético) de `assets/images/before/` es
// el "antes" y la de `assets/images/after/` es el "después". Así se puede
// reemplazar la pareja subiendo otros archivos, sin tocar código.
//
// Requisito para que el barrido funcione: ambas fotos deben compartir encuadre
// y relación de aspecto (las actuales son 1536x1024).
//
// Los patrones van escritos como literales porque Vite los analiza en tiempo
// de compilación: no admite variables ni interpolación dentro de `glob()`.

const beforeImages = import.meta.glob<{ default: ImageMetadata }>(
	"../../assets/images/before/*.{svg,png,jpg,jpeg,webp,avif}",
	{ eager: true },
);

const afterImages = import.meta.glob<{ default: ImageMetadata }>(
	"../../assets/images/after/*.{svg,png,jpg,jpeg,webp,avif}",
	{ eager: true },
);

function firstImage(
	modules: Record<string, { default: ImageMetadata }>,
): ImageMetadata | undefined {
	const [entry] = Object.entries(modules).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	return entry?.[1].default;
}

// Esto exporta las imagenes de antes y después para que puedan ser usadas en otros archivos, como en el componente de comparación.
//
// Peeeeeeero debe aclararse que si no hay imágenes en las carpetas, estas variables serán undefined. 
// Por lo tanto, es importante asegurarse de que siempre haya al menos una imagen.
//
// Además también es importante saber que las imagenes que serán comparadas son las primeras en orden alfabético de sus respectivas carpetas, por lo que si se agregan más imágenes, 
// estas no serán consideradas para la comparación a menos que sean las primeras en orden alfabético.

export const beforeImage = firstImage(beforeImages);
export const afterImage = firstImage(afterImages);
