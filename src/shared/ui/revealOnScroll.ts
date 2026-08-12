// Staggered "reveal on scroll" for `[data-animate]` elements.
//
// Modern browsers do this entirely in CSS via `animation-timeline: view()`
// (see each section's <style> block), so here we only handle the fallbacks:
//   - IntersectionObserver plays a one-shot fade as each element enters view.
//   - Oldest browsers just show everything.
//
// Compartido: cualquier sección puede marcar elementos con `data-animate` e
// importar este módulo; el navegador lo evalúa una sola vez por página.

const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

const supportsScrollTimeline =
	"CSS" in window && CSS.supports("animation-timeline", "view()");

const revealTargets = document.querySelectorAll<HTMLElement>("[data-animate]");

if (prefersReducedMotion || supportsScrollTimeline) {
	// Reduced motion and scroll-driven reveal are both handled in CSS.
} else if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					obs.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
	);

	revealTargets.forEach((el) => observer.observe(el));
} else {
	revealTargets.forEach((el) => el.classList.add("is-visible"));
}
