// ------------------------------------------------------------------
// Placeholder subscribe endpoint.
//
// Right now this just validates the email and logs it — swap the
// TODO block below for a real call to your email provider, e.g.:
//
//   ConvertKit:  POST https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe
//   MailerLite:  POST https://connect.mailerlite.com/api/subscribers
//   Resend:      use resend.contacts.create() from the Resend SDK
//
// Store the provider's API key in an environment variable
// (e.g. CONVERTKIT_API_KEY) — never hardcode it here.
// ------------------------------------------------------------------

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: replace with a real email-provider API call
  console.log("New subscriber:", email);

  return Response.json({ ok: true });
}
