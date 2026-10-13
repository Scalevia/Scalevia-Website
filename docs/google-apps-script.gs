/**
 * ScaleVia contact form → Google Sheet + email notification
 *
 * Setup (one time):
 * 1. Create a Google Sheet (e.g. "ScaleVia Leads").
 * 2. Extensions → Apps Script, paste this whole file, then edit the two constants below.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the web-app URL into Vercel → Project → Settings → Environment Variables:
 *      GOOGLE_SCRIPT_URL = <web-app URL>
 *      CONTACT_SECRET    = <same value as SECRET below>
 * 5. Redeploy the site on Vercel.
 */

const SECRET = "change-me-to-a-long-random-string";
const NOTIFY_EMAIL = "tech@scalevia.net";

const HEADERS = ["Date", "Name", "Email", "Phone", "Company", "Service", "Message", "Language"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    const row = [
      new Date(data.submittedAt || Date.now()),
      data.name,
      data.email,
      data.phone,
      data.company,
      data.service,
      data.message,
      data.locale,
    ].map(safe);
    sheet.appendRow(row);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: "New ScaleVia lead: " + data.name + (data.service ? " — " + data.service : ""),
      htmlBody:
        "<h2>New consultation request</h2><table cellpadding='6'>" +
        HEADERS.slice(1)
          .map(function (h, i) {
            return "<tr><td><b>" + h + "</b></td><td>" + escapeHtml(String(row[i + 1] || "—")) + "</td></tr>";
          })
          .join("") +
        "</table>",
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Prevents spreadsheet formula injection (values starting with = + - @)
function safe(value) {
  if (typeof value !== "string") return value;
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
