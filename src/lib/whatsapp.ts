// WhatsApp number used by every "chat on WhatsApp" link on the site: the shared WATI number. The CRM's
// WATI webhooks forward chats that carry this site's tag to /api/whatsapp-inbound, which saves them as
// leads with source "SettleLoans WhatsApp". Calls (tel: links) are not affected.
export const WHATSAPP_NUMBER = "919289622596";

// Numbers the site linked to before; any link still pointing at them is sent to the WATI number on click.
export const LEGACY_WHATSAPP_NUMBERS = ["919821219819"];

// Tag appended to every pre-filled message, e.g. "(Ref: settleloans.in/some-page)". The WATI number is shared
// with AMA and other brands, so only messages carrying this exact tag become SettleLoans leads.
export const TAG_DOMAIN = "settleloans.in";
export function pageTag(path: string): string {
  return `(Ref: ${TAG_DOMAIN}${path})`;
}
export const WEBSITE_TAG_RE = /\(Ref: settleloans\.in(\/[^)\s]*)\)/;
