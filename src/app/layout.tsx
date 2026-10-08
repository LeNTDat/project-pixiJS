'use client'

const Layout = ({children}: {children?: React.ReactNode})=>{
    return <html lang="vi">
        <head>
            <title>Pixi Project</title>
        </head>
        <body>
            {children}
        </body>
    </html>
}

export default Layout;