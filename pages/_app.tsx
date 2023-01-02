import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { ToastProvider } from "react-toast-notifications";
import ThemeContextProvider from '../src/context/ThemeContext';
import 'react-loading-skeleton/dist/skeleton.css';
import PopupLogin from "../src/components/frontend/register/popup-login";
import PopupRegister from "../src/components/frontend/register/popup-register";
import "../styles/globals.css";
import LostPassword from "../src/components/frontend/register/lost-password";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ThemeContextProvider>
        <NextIntlProvider
          // To achieve consistent date, time and number formatting
          // across the app, you can define a set of global formats.
          formats={{
            dateTime: {
              short: {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              },
            },
          }}
          messages={pageProps.messages}
          // Providing an explicit value for `now` ensures consistent formatting of
          // relative values regardless of the server or client environment.
          now={new Date(pageProps.now)}
          // Also an explicit time zone is helpful to ensure dates render the
          // same way on the client as on the server, which might be located
          // in a different time zone.
          timeZone='UTC'
        >
          <Component {...pageProps} />
          <PopupRegister />
          <PopupLogin />
          <LostPassword />
        </NextIntlProvider>
      </ThemeContextProvider>
    </ToastProvider>
  )
}
