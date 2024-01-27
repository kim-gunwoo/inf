export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite App</title>
            <meta name="description" content="Vite App is a..." />
        </head>
        <body>
            // <div id="root"></div>
            // <script type="module" src="/src/main.tsx"></script>
            <div id="root">{children}</div>
        </body>
        </html>
    )
}