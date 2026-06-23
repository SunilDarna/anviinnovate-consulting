// SES email helper. Sends are best-effort: a sandbox/throttle/identity failure
// is logged and swallowed so it never breaks the API response.
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({});
const FROM = process.env.FROM_EMAIL || "hello@anviinnovate.com";
const FOOTER_ADDR = process.env.COMPANY_ADDRESS || "Anvi Innovate";

function withFooter(html) {
  return `${html}<hr style="margin-top:24px;border:none;border-top:1px solid #e2e8f0"/>
  <p style="color:#475569;font-size:12px">The Anvi Innovate Team · hello@anviinnovate.com<br/>${FOOTER_ADDR}<br/>
  You received this email because you contacted Anvi Innovate. To unsubscribe, reply with "unsubscribe".</p>`;
}

export async function sendEmail({ to, subject, html, text }) {
  if (!to) return false;
  try {
    await ses.send(new SendEmailCommand({
      Source: FROM,
      Destination: { ToAddresses: Array.isArray(to) ? to : [to] },
      Message: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: {
          Html: { Data: withFooter(html), Charset: "UTF-8" },
          ...(text ? { Text: { Data: text, Charset: "UTF-8" } } : {}),
        },
      },
    }));
    return true;
  } catch (e) {
    console.error("SES send failed", { to, subject, err: e?.message });
    return false;
  }
}
