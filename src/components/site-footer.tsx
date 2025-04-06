import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

interface FooterSettings {
  footer_content: any
  social_media: any
}

export function SiteFooter({ settings }: { settings: FooterSettings | null }) {
  if (!settings) {
    return null
  }

  // Parse footer_content if it's a string
  let footerContent = settings.footer_content
  if (typeof footerContent === "string") {
    try {
      footerContent = JSON.parse(footerContent)
    } catch (e) {
      footerContent = {}
    }
  }

  // Parse social_media if it's a string
  let socialMedia = settings.social_media
  if (typeof socialMedia === "string") {
    try {
      socialMedia = JSON.parse(socialMedia)
    } catch (e) {
      socialMedia = {}
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerContent.column1?.title || "Hakkımızda"}</h3>
            <p className="text-gray-400">{footerContent.column1?.content || ""}</p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerContent.column2?.title || "Hizmetlerimiz"}</h3>
            <ul className="space-y-2">
              {Array.isArray(footerContent.column2?.links) &&
                footerContent.column2.links.map((link: string, index: number) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerContent.column3?.title || "Hızlı Bağlantılar"}</h3>
            <ul className="space-y-2">
              {Array.isArray(footerContent.column3?.links) &&
                footerContent.column3.links.map((link: string, index: number) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerContent.column4?.title || "İletişim"}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Telefon:</span>
                {footerContent.column4?.phone || ""}
              </li>
              <li className="text-gray-400">
                <span className="block">E-posta:</span>
                {footerContent.column4?.email || ""}
              </li>
              <li className="text-gray-400">
                <span className="block">Adres:</span>
                {footerContent.column4?.address || ""}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Orhan Elektrik. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-4">
            {socialMedia.facebook && (
              <a
                href={socialMedia.facebook}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}

            {socialMedia.instagram && (
              <a
                href={socialMedia.instagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}

            {socialMedia.twitter && (
              <a
                href={socialMedia.twitter}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}

            {socialMedia.linkedin && (
              <a
                href={socialMedia.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

