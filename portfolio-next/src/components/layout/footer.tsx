import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
  ],
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/leoebet', icon: 'fab fa-facebook' },
    { name: 'GitHub', href: 'https://github.com/leonaruebet', icon: 'fab fa-github' },
    { name: 'YouTube', href: 'https://www.youtube.com/@leonaruebet', icon: 'fab fa-youtube' },
    { name: 'Line', href: 'https://line.me/ti/p/~leo25462546', icon: 'fab fa-line' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/leonaruebet/', icon: 'fab fa-linkedin' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#73D25D]/20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#73D25D]">
                <path
                  d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                  className="fill-current"
                />
              </svg>
              <span className="font-semibold text-white">[Leo]<span className="text-[#73D25D]">Naruebet</span></span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/60">
              A passionate Data Scientist and Business Developer creating innovative solutions through technology and entrepreneurship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-[#73D25D]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Social</h3>
              <ul className="mt-4 space-y-3">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-white/60 transition-colors hover:text-[#73D25D]"
                    >
                      <i className={`${item.icon} w-5`} aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#73D25D]/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Naruebet Aungsirikulthumrong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 