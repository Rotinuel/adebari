import { Outfit } from "next/font/google";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


export const metadata = {
  title: 'Adebari Consult — Building Structures & Construction',
  description: 'Adebari Consult specializes in all kinds of building structures — residential, commercial and industrial construction services.',
  openGraph: { title: 'Adebari Consult', description: 'Professional construction and structural engineering', images: ['/og-image.jpg'] }
}

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <div className="flex flex-col min-h-screen">
        <main className="grow">
        {children}
        </main>
        </div>
        
      </body>
    </html>
  );
}