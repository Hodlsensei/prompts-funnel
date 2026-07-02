// ------------------------------------------------------------------
// EDIT THIS FILE to connect your real checkout + email provider.
// Everything else in the app reads from here.
// ------------------------------------------------------------------

export const CONFIG = {
  productName: "Prompt/Pack",
  tagline: "AI prompts for developers, not for prompt bros.",

  // Gumroad: go to your product page > click "Share" > copy the short URL.
  // It looks like: https://YOURNAME.gumroad.com/l/xxxxx
  checkout: {
    main: "https://readersyndicate.gumroad.com/l/kwgmnw",
  },

  // Where the free-sample email form submits.
  emailEndpoint: "/api/subscribe",

  prices: {
    main: { amount: "19", label: "500 Prompts Pack" },
  },
};