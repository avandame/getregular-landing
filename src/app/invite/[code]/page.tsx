import { redirect } from "next/navigation";

const APP_STORE_URL =
  "https://apps.apple.com/ca/app/get-regular/id6749188690";

/**
 * Invite link handler.
 *
 * If the user has the app installed, iOS/Android will intercept this URL
 * via Universal Links / App Links and open the app directly — this page
 * never loads.
 *
 * If the app is NOT installed, this page loads and redirects to the App Store.
 */
export default function InvitePage() {
  redirect(APP_STORE_URL);
}
