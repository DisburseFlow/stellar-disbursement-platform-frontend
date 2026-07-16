<<<<<<< HEAD

Step by step guide to get started with the `G3` repository
---

### Step 1: The Dev Clones the Repo

A new developer clones the repo recursively so they actually get the code files inside `frontend` and `backend`:

```bash
git clone --recursive https://github.com/DisburseFlow/G3.git
cd G3

```

---

### Step 2: Making and Pushing Changes to a Submodule

By default, Git leaves submodules in a **"detached HEAD"** state (it just points to a specific commit hash). Before making changes, the developer *must* switch to a working branch (like `develop` or `main`) inside that specific directory.

Let's say they want to change something in the **frontend**:

1. **Navigate into the frontend directory:** Moves into the submodule repository.
```bash
cd frontend

```


2. **Checkout your working branch:** Crucial! This tells Git which branch to apply changes to.
```bash
git checkout develop   # or main, whichever branch your fork uses

```


3. **Make the code changes:** Do your coding work here.
Modify the files, test them, and make sure everything works.


4. **Commit and Push the frontend changes:** This pushes ONLY to the frontend fork repository.
```bash
git add .
git commit -m "fix: updated dashboard layout"
git push origin develop

```


---

### Step 3: Updating the Parent `G3` Repo (The Missing Link)

Right now, the changes are live on the `stellar-disbursement-platform-frontend` fork, but your parent `G3` repo is still pointing to the old commit hash (`e32a4e5`).

The developer needs to go back to the root `G3` directory and tell `G3` to track the new commit:

1. **Navigate back to G3 root:** Go back up to the main project folder.
```bash
cd ..

```


2. **Check git status:** Notice that Git sees 'frontend' has a new commit pointer.
Run `git status`. You will see something like:

```text
Changes not staged for commit:
  modified:   frontend (new commits)

```


3. **Commit and Push the pointer update:** This saves the new folder pointer hash into G3.
```bash
git add frontend
git commit -m "chore: update frontend submodule pointer"
git push origin main

```


---

### Summary of what just happened:

1. The code changes were pushed directly to your **Frontend Fork**.
2. A new commit pointer hash was pushed to **G3**.

Now, when any other developer runs `git pull --recurse-submodules` on `G3`, their local machine will see the updated pointer and automatically download the new frontend code!
=======
# Stellar Disbursement Platform Frontend

## Introduction

The Stellar Disbursement Platform (SDP) enables organizations to disburse bulk
payments to recipients using Stellar.

This repo contains the SDP dashboard UI, which is to be used with the
[Stellar Disbursement Platform Backend](https://github.com/stellar/stellar-disbursement-platform-backend).
For more information on how to get started, see the Stellar
[dev docs](https://developers.stellar.org/docs/platforms/stellar-disbursement-platform)
and
[API reference](https://developers.stellar.org/docs/platforms/stellar-disbursement-platform/api-reference).

The SDP's comprehensive dashboard includes the following pages:

- Dashboard Home (Overview): Summary of recent disbursement activities and key
  metrics, including successful payment rate, total successful/failed/remaining
  payments, total disbursed, individuals, and wallets.
- Disbursements Page (Management): Create, draft, search, filter, and export
  disbursements. Detailed disbursement page includes names, total payments,
  successes, failures, remaining, creation date, total amount, and disbursed
  amount.
- Receivers Page (Overview): List of individuals set to receive payments, with
  wallet information and payment history. May also search, filter, and export
  receiver data in CSV.
- Payments Page (Overview): Summary of all payments, including search by payment
  ID, filters, and export options. Payment details include Payment ID, wallet
  address, disbursement name, completion time, amount, and status information.
- Wallets Page (Management): View Distribution Account information including
  public key, balance, adding funds, and more, and manage which assets you want
  to use on the Stellar network.
- Analytics Page (Overview): Provides insights into financial transactions,
  including successful payment rate, total successful/failed/remaining payments,
  total disbursed, average amount, total amount per asset, and individuals and
  wallets involved.

Feedback and contributions are welcome!

## Local HTTPS Development

HTTPS is required for testing passkey authentication with embedded wallets.

The development server supports HTTPS using
[mkcert](https://github.com/FiloSottile/mkcert) for locally-trusted
certificates.

### Setup

Install mkcert and generate certificates:

```sh
# Install mkcert (see https://web.dev/articles/how-to-use-local-https)
brew install mkcert
mkcert -install

# Generate certificates in project root (these are gitignored)
mkdir -p certs
mkcert -key-file certs/localhost-key.pem -cert-file certs/localhost.pem \
  "*.stellar.local" localhost 127.0.0.1 ::1
```

### Running with HTTPS

```sh
# HTTPS mode (required for passkeys/WebAuthn)
yarn start:https

# HTTP mode (default)
yarn start
```

Access the application at `https://localhost:3000` or
`https://[tenant].stellar.local:3000` (e.g., `https://redcorp.stellar.local:3000`).

If certificates are missing, the server falls back to HTTP with a warning.

## Environment Variables

Environment variables can be set either on a global `window._env_` object or as
`process.env` variables. All environment variables used in this repo are in
`src/constants/envVariables.ts` file, including types.

### `window`

The default location of the `window._env_` object is
`public/settings/env-config.js` (not included in the repo). The path can be
updated in `src/constants/envVariables.ts` variable `WINDOW_ENV_PATH`.

Example settings for local testing:

```javascript
window._env_ = {
  API_URL: "http://localhost:8000",
  STELLAR_EXPERT_URL: "https://stellar.expert/explorer/testnet",
  HORIZON_URL: "https://horizon-testnet.stellar.org",
  RECAPTCHA_SITE_KEY: "6Lego1wmAAAAAJNwh6RoOrsHuWnsciCTIL3NN-bn",
  SINGLE_TENANT_MODE: false,
  RPC_ENABLED: false, // Set to true to enable contract account features
};
```

### `process`

The `.env` file should be placed in the root directory of the repo. All
variables should be prefixed with `REACT_APP_`.

Set the value to true to avoid fetching the file if the Window ENV is not used.

<!-- prettier-ignore -->
> [!NOTE]
> Set `REACT_APP_DISABLE_WINDOW_ENV=true` to avoid fetching the
> `public/settings/env-config.js` file if the `window._env_` is not used.

<!-- prettier-ignore -->
> [!NOTE]
> Set `REACT_APP_DISABLE_TENANT_PREFIL_FROM_DOMAIN=true` to skip prefilling the hostname from the domain.

For example:

```
REACT_APP_DISABLE_WINDOW_ENV=true
REACT_APP_DISABLE_TENANT_PREFIL_FROM_DOMAIN=false
REACT_APP_API_URL=http://localhost:8000
REACT_APP_STELLAR_EXPERT_URL=https://stellar.expert/explorer/testnet
REACT_APP_HORIZON_URL=https://horizon-testnet.stellar.org
REACT_APP_RECAPTCHA_SITE_KEY=6Lego1wmAAAAAJNwh6RoOrsHuWnsciCTIL3NN-bn
```

## Favicon

[Favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) image files
are located in `/public` directory. The files are:

- `apple-touch-icon.png` - mostly used for shortcuts
- `favicon.ico` - for legacy browsers and devices
- `icon-192.png` and `icon-512.png` - fallback if SVG is not supported
- `icon.svg` - modern browser support is very good (can be adjusted to match
  operating system theme)

Having this set of favicons should cover all devices and browsers. They are set
in `/src/index.html` and `/public/manifest.json` files.

<figure>
  <img
  src="public/icon-192.png"
  alt="Stellar logo favicon">
  <figcaption>Default favicon</figcaption>
</figure>
>>>>>>> cdcab0e (initialize frontend scaffold with landing page.)
