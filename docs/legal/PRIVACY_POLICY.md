# Privacy Policy

**Service:** LendTrack (the "App")
**Operator:** **LendTrack** ("LendTrack," "we," "us," or "our")
**Effective Date:** **01 August 2026**
**Last Updated:** **12 August 2026**

---

## 1. Introduction & Scope

LendTrack is a mobile application that helps you keep a personal record of items you lend to other people and when those items are due back. This Privacy Policy explains what personal information we collect, how we use and share it, how long we keep it, and the choices and rights you have.

This Policy applies to the LendTrack mobile application and any related support communications (together, the "Service"). It does not apply to third-party services that the Service connects to, which are governed by their own policies (see Section 4).

**Key definitions**

- **"Personal Data"** means any information that identifies, relates to, or can reasonably be linked to an individual.
- **"Lending Record"** means the entry you create in the App describing an item you have lent, including the details listed in Section 2.
- **"Borrower"** means a person whose name or contact details you enter into a Lending Record.
- **"You"** means the individual using the Service.

**By creating an account or using the Service, you acknowledge that you have read and understood this Privacy Policy.** If you do not agree with it, please do not use the Service.

---

## 2. Information We Collect

### 2.1 Information you provide

| Category | What it includes | Why we need it |
|---|---|---|
| **Account information** | Email address, display name, and password (for email sign-up). Your password is handled by Firebase Authentication; we do not see or store it in readable form. | To create and secure your account. |
| **Google account information** | If you choose "Sign in with Google": your email address, display name, and profile photo, as shared by Google. | To sign you in without a separate password. |
| **Lending Records** | Item name, category, borrower's name, borrower's phone number (optional), dates lent and due, notes, return date, who returned the item, return notes, and an optional photo of the item. | To provide the core record-keeping function. |
| **Photos** | A photo you choose to take with your camera or select from your photo library. The photo is compressed on your device and stored inside the relevant Lending Record. | To let you document the item. |
| **Communications** | Messages you send to our support contact. | To respond to you. |

**Information about Borrowers.** You may enter a Borrower's name and phone number. You are responsible for having a legitimate basis to record that information (see our Terms of Service). We use Borrower information only to display it back to you within your account. We do not contact Borrowers, and we do not build profiles of them.

### 2.2 Information collected automatically

- **Crash and diagnostic data.** In production builds, the App sends crash reports to Firebase Crashlytics. These reports may include the device model, operating system version, App version, a timestamp, the technical stack trace of the error, and an installation identifier. They are not intended to include the contents of your Lending Records. Crash reporting is switched off in development builds.
- **Technical data processed by our infrastructure providers.** When the App communicates with Firebase services, those providers receive technical information needed to deliver the connection, such as IP address, request timestamps, and device and app identifiers. Our providers may keep this in security and operational logs.
- **Fonts.** The App may load typefaces from Google Fonts, which can cause your IP address to be received by Google when the font is downloaded.
- **On-device settings and queued data.** The App stores your notification preferences and, when you are offline, a queue of changes to your Lending Records, in local app storage on your device. The queue is sent to our backend once you are back online.

### 2.3 What we do **not** collect

- We do not use advertising SDKs or advertising identifiers.
- We do not use third-party product-analytics or behavioral-tracking SDKs.
- We do not collect precise or approximate location, contacts, SMS, microphone audio, or files other than photos you explicitly choose.
- We do not process payments, and the Service does not currently collect payment card information.
- We do not use cookies, as the Service is a mobile application. Any website we operate to host this Policy may use only strictly necessary cookies.

### 2.4 Device permissions

| Permission | Purpose | Notes |
|---|---|---|
| **Camera** | Take a photo to attach to a Lending Record. | Requested only when you choose to take a photo. You can deny it and still use the App. |
| **Photo library** | Choose an existing photo to attach. | Requested only when you choose to attach a photo. |
| **Notifications** | Show reminders for upcoming and overdue items. | Reminders are scheduled **locally on your device**; they are not push messages sent from a server. You can disable them in the App or in your device settings. |
| **Network access / connection state** | Sync your data and detect when you are offline. | Required for sync. |
| **Run at startup (Android)** | Re-register scheduled reminders after your device restarts or the App updates. | Used only for reminder scheduling. |
| **Vibrate (Android)** | Vibrate for reminders. | |

---

## 3. How We Use Your Information

We use Personal Data to:

1. **Provide the Service**, including authenticating you, storing and displaying your Lending Records, syncing between online and offline use, and scheduling local reminders.
2. **Maintain your account**, including email verification, password-reset emails, and account deletion.
3. **Improve and fix the Service**, including diagnosing crashes and performance problems.
4. **Communicate with you**, including transactional messages (such as verification and password-reset emails) and replies to support requests.
5. **Protect the Service and its users**, including detecting abuse, enforcing our Terms of Service, and complying with legal obligations.

**Our legal bases** (where laws such as the EU/UK GDPR apply) are: performance of our contract with you (providing the Service); our legitimate interests (security, crash diagnostics, and improving reliability), balanced against your rights; compliance with legal obligations; and your consent where we ask for it (for example, device permissions).

We do not use your Personal Data for advertising, we do not sell it, and we do not use it to make decisions that produce legal or similarly significant effects about you through automated means.

---

## 4. Data Sharing & Third-Party Disclosure

**We do not sell your Personal Data, and we do not "share" it for cross-context behavioral advertising.**

We disclose Personal Data only to service providers that process it on our behalf to run the Service, and in the limited circumstances described below.

### 4.1 Service providers

| Provider | Category | Data involved |
|---|---|---|
| **Google Firebase Authentication** (Google LLC) | Authentication | Email address, display name, authentication credentials and tokens, sign-in provider, technical connection data. |
| **Google Sign-In** (Google LLC) | Optional third-party sign-in | Basic Google profile information you authorize (email, name, photo). |
| **Google Cloud Firestore** (Google LLC) | Database hosting | Your Lending Records, including any attached photo, which is stored as encoded data within the record. |
| **Firebase Crashlytics** (Google LLC) | Crash reporting | Crash reports and device/app diagnostics. |
| **Google Fonts** (Google LLC) | Font delivery | IP address and request metadata when fonts are downloaded. |
| **Apple App Store / Google Play** | App distribution | Governed by those platforms' own policies; we do not receive your payment details. |

Google processes Firebase data under its own terms, including the Firebase Data Processing and Security Terms. Google's privacy practices are described at <https://policies.google.com/privacy> and <https://firebase.google.com/support/privacy>.

### 4.2 Other disclosures

We may disclose Personal Data:

- **To comply with law**, such as a valid subpoena, court order, or other legal process, or to protect the rights, property, or safety of our users, the public, or us;
- **In a business transfer**, such as a merger, acquisition, financing, or sale of assets, subject to commitments at least as protective as this Policy; and
- **With your direction or consent.**

We do not share your Lending Records with other users. The Service has no social or sharing features, and our database security rules restrict access to each record to the account that created it.

---

## 5. Data Retention & Security

### 5.1 Retention

- **Account and Lending Records:** kept for as long as your account is active.
- **Deletion:** you can permanently delete your account at any time in the App (**Profile → Delete Account**). The App removes your Lending Records and then deletes your authentication account. Deletion is intended to be immediate and cannot be undone. You may be asked to re-authenticate first.
- **Backups and logs:** Automated database snapshots and data access audit logs are **disabled and not configured** for this project; therefore, no customer-managed data backups or read/write logs are created or stored. Standard system infrastructure logs and operational metadata may still persist in provider internal logs or caches for a limited period (generally not exceeding **30 days**) before being overwritten or deleted.
- **Crash reports:** retained by Firebase Crashlytics for the period set by Google (currently 90 days by default).
- **Support correspondence:** retained as long as needed to resolve your request and for a reasonable period afterward.
- **Legal requirements:** we may retain limited information where required to meet legal obligations, resolve disputes, or enforce our agreements.
- **On-device data:** local preferences and queued changes remain on your device until synced, you clear the App's data, or you uninstall the App.

### 5.2 Security

We use reasonable administrative, technical, and organizational measures to protect Personal Data, including:

- encryption of data in transit between the App and Firebase services (TLS);
- encryption at rest provided by Google Cloud infrastructure;
- server-side security rules that allow a signed-in user to read and write only their own Lending Records and that validate the structure and size of what is written;
- email verification for new accounts and re-authentication before sensitive actions such as account deletion; and
- restricted access to our own administrative systems.

No system is perfectly secure. We cannot guarantee absolute security, and you are responsible for keeping your credentials and device secure. If a breach affects your Personal Data, we will notify you and the relevant authorities as required by applicable law.

---

## 6. Your Rights & Choices

### 6.1 Controls available in the App

- **Access and correction:** view and edit your Lending Records and display name in the App.
- **Deletion:** delete individual Lending Records, or delete your entire account and data from **Profile → Delete Account**.
- **Notifications:** turn reminders on or off in the App or in your device's system settings.
- **Camera and photo access:** grant or revoke at any time in your device settings.
- **Crash reports:** you can limit diagnostic collection through your device's privacy settings where available.

### 6.2 Rights under applicable law

Depending on where you live, you may have the right to: access your Personal Data and receive a portable copy; correct inaccurate data; delete your data; restrict or object to certain processing; withdraw consent at any time (without affecting prior processing); and lodge a complaint with your local data-protection authority.

**California and other US state residents** may have rights to know, access, correct, delete, and obtain a copy of Personal Data, and to opt out of "sales," "sharing," and targeted advertising. We do not sell or share Personal Data for those purposes and will not discriminate against you for exercising your rights.

To exercise a right that you cannot complete in the App, contact us using the details in Section 10. We may need to verify your identity, and we will respond within the time required by applicable law (generally 30–45 days).

### 6.3 If you are a Borrower

If someone has entered your name or phone number into LendTrack, that person (not us) decided to record it for their own personal record-keeping. We do not use it for any other purpose. To ask about or request removal of your information, contact us and we will help where we are able to identify the relevant record, or ask the account holder to remove it.

---

## 7. Children's Privacy

The Service is not directed to children. You must be at least **13 years old** to use LendTrack, or **16 years old** (or the higher minimum age of digital consent in your jurisdiction) if you are in the European Economic Area, the United Kingdom, or another region where that age applies. We do not knowingly collect Personal Data from anyone under that age. If you believe a child has provided us Personal Data, contact us and we will delete it promptly.

---

## 8. International Data Transfers & Legal Compliance

Our service providers, including Google, operate globally. Your Personal Data may be processed in countries other than your own, including the United States, which may have different data-protection laws. Firestore data is stored in the region configured for our project: **nam5 (United States)**.

Where required, we rely on appropriate safeguards for international transfers, such as the European Commission's Standard Contractual Clauses, the UK International Data Transfer Addendum, and provider participation in the EU–US Data Privacy Framework.

We aim to comply with the privacy laws that apply to the Service, which may include the EU/UK General Data Protection Regulation, the California Consumer Privacy Act (as amended), India's Digital Personal Data Protection Act, 2023, and similar laws, as well as the Google Play and Apple App Store developer data-safety requirements.

---

## 9. Changes to This Privacy Policy

We may update this Policy from time to time. When we make material changes, we will update the "Last Updated" date and notify you through the App or by email before the change takes effect where practicable. Your continued use of the Service after the effective date of an updated Policy means you accept it. We encourage you to review this Policy periodically.

---

## 10. Contact Information

For privacy questions, requests, or complaints:

**LendTrack**
Attention: Privacy / Legal
Email: **support@lend-track.com**
Postal address: **Eau Coulée, Curepipe, Plaine Wilhems, Mauritius**

If you are in the EEA or UK and are unsatisfied with our response, you may contact your local supervisory authority.
