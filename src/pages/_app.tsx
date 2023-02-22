import "../globals.css";
import type { AppProps } from 'next/app'
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import "react-tippy/dist/tippy.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import ES from '../lang/global_es.json'
import EN from '../lang/global_en.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        es: {
            global: ES
        },
        en: {
            global: EN
        }
    }
})

export default function App({ Component, pageProps, router }: AppProps) {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Tomas Millan</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="keywords"
                    content="ptzt, Tomas Millan, Tomas, Millan, web developer, github, typescript"
                />
                <meta name="description" content="Tomas Millan - Dev" />
                <meta name="author" content="Tomas Millan" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>

            <I18nextProvider i18n={i18next}>
                <div className="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#CBCBCB] dark:from-black dark:to-[#0d131f] min-h-screen">
                    <Nav />
                    <div className="w-[80%] md:w-[45rem]">
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} key={router.pathname} />
                        </AnimatePresence>
                        <Footer />
                    </div>
                </div>
            </I18nextProvider>
        </>
    )
}
