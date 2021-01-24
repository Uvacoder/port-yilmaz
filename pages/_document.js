import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

export default class Document extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:wght@400;600;900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <ColorModeScript initialColorMode="dark" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}