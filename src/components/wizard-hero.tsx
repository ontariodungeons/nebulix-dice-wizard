/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BCfVEO8ZHnL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function WizardHero() {
  return (
    <section className="relative h-[50vh] bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center dark:bg-charcoal">
      <div className="absolute inset-0 bg-black opacity-50 dark:bg-charcoal dark:opacity-75" />
      <div className="z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-gray-800 dark:text-lightgray">
          Embark on the Experimental
        </h1>
        <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-lightgray">
          The Dice Wizard is always looking for new adventures to join. Here are some of the upcoming adventures, and
          some of the adventures that are waiting for you to join them.
        </p>
        <Button className="bg-peach px-6 py-3 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:bg-turquoise">
          Start Your Adventure
        </Button>
      </div>
    </section>
  )
}

