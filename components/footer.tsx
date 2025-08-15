import { Logo } from '@/components/logo'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="mx-auto block w-fit"
        >
          <Logo />
        </Link>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tailark. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

