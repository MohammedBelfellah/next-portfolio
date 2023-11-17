import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'
import ActiveSectionContextProvider from './context/active-section-context'




export const metadata: Metadata = {
  title: 'belfelalh dev',
  description: 'Welcome to Belfelalh Dev  your gateway to a dynamic fusion of WordPress, React, and Next.js expertise. Immerse yourself in a portfolio where cutting-edge technology converges with creative design. As a front-end developer, I bring ideas to life with precision and flair. From seamless user interfaces powered by React to lightning-fast websites using Next.js, each project reflects a commitment to excellence. The aesthetic finesse is enhanced by the elegance of Tailwind CSS, ensuring a visually stunning and responsive experience. Explore the intersection of art and technology, where innovation knows no bounds. Elevate your digital presence with Belfelalh Dev – where WordPress, React, Next.js, Tailwind CSS, and more converge into a symphony of digital excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel='icon' href='/favicon-32x32.png'/>
      </head>
      <body 
      className={` bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}

      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
          <ActiveSectionContextProvider>
            <Header/>
            {children}
          </ActiveSectionContextProvider>

      </body>
    </html>
  )
}
