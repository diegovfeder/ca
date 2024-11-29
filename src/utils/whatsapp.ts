/**
 * Creates a WhatsApp URL with an encoded message
 * @param phoneNumber - The phone number in international format (e.g., +5541999999999)
 * @param message - The message to be pre-filled
 * @returns The complete WhatsApp URL
 */
export function createWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
