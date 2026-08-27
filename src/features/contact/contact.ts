// Datos de contacto de Dryza usados por la página /contacto.
// Si cambian el correo, el número o el usuario de Instagram, este es el
// único archivo a tocar.
export const contact = {
	email: "dryzapanels@dryzapanels.com",
	phoneDisplay: "+1 (803) 292-5089",
	// Número para enlaces sms:, con código de país y el "+" inicial.
	smsNumber: "+18032925089",
	// Número para enlaces wa.me: solo dígitos, sin "+" ni separadores.
	whatsappNumber: "18032925089",
	// Usuario de Instagram (sin "@"). Los DM de Instagram no admiten texto
	// predefinido desde la web: el mockup copia el mensaje al portapapeles
	// y abre la conversación en ig.me/m/<usuario>.
	instagramUser: "dryzapanels",
	location: "Augusta, Georgia",
} as const;

// Mensajes predefinidos de los mockups de chat (iMessage, WhatsApp e
// Instagram): al tocar uno se abre la app correspondiente con el texto
// listo (o copiado, en el caso de Instagram).
export const quickReplies = [
	"Hi! I'd like a free estimate for my project.",
	"Hi! I'd like to know more about your anti-moisture panels.",
	"Hi! Do you install outside Augusta, Georgia?",
	"Hi! I'd like to know more about your products and services.",
] as const;

// Opciones del selector de asunto de la ventana de redacción estilo Gmail.
export const emailSubjects = [
	"Request a free estimate for Dryza panels",
	"Product question",
	"Shipping and delivery question",
	"Something else",
] as const;

// Mensaje usado cuando el visitante pulsa enviar en un mockup de chat sin
// escribir nada en el campo de texto libre.
export const defaultMessage = "Hi Dryza! I'd like to get in touch.";
