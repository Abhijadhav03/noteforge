import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function CallToAction() {
    return (
        <section className="relative py-16">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
               

                <div className="relative text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        🛠️ Build Your Mind Like a Developer
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Fast, local-first, and built for code. Notes that work the way you think.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/" aria-label="Get Started with Tailark">
                                <span>Get Started</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}