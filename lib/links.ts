const FALLBACK = {
  whatsappNumber: "601159918214",
  whatsappMessage:
    "Hai Astana POS! Saya berminat dengan sistem juruwang cloud anda — boleh kongsi maklumat lanjut?",
  calendly: "",
  playStore: "",
  hubRegister: "https://hub.astanabiz.com/registration_form",
  hubLogin: "https://hub.astanabiz.com/",
  mcbiz: "https://mcbiz.astanabiz.com",
} as const;

export const links = {
  whatsapp(): string {
    const number =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? FALLBACK.whatsappNumber;
    const message =
      process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ?? FALLBACK.whatsappMessage;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  },
  calendly(): string {
    return process.env.NEXT_PUBLIC_CALENDLY_URL ?? FALLBACK.calendly;
  },
  playStore(): string {
    return process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? FALLBACK.playStore;
  },
  hubRegister(): string {
    return process.env.NEXT_PUBLIC_HUB_REGISTRATION_URL ?? FALLBACK.hubRegister;
  },
  hubLogin(): string {
    return process.env.NEXT_PUBLIC_HUB_LOGIN_URL ?? FALLBACK.hubLogin;
  },
  mcbiz(): string {
    return process.env.NEXT_PUBLIC_MCBIZ_URL ?? FALLBACK.mcbiz;
  },
};

export function resolveFooterHref(token: string): {
  href: string;
  external: boolean;
} {
  switch (token) {
    case "hub-register":
      return { href: links.hubRegister(), external: true };
    case "hub-login":
      return { href: links.hubLogin(), external: true };
    case "mcbiz":
      return { href: links.mcbiz(), external: true };
    case "play-store": {
      const url = links.playStore();
      return { href: url || "#", external: Boolean(url) };
    }
    default:
      return { href: token, external: false };
  }
}
