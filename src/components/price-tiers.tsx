/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4GyCp2BQGvj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function PriceTiers() {
  return (
    <div className="bg-[#1a1a1a]p-8 dark:bg-[#1a1a1a] dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-10">The Dice Wizard Welcomes You to Join the Adventure!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#f8f0e3] flex flex-col justify-between border border-gray-300 dark:border-gray-700">
          <div>
            <CardHeader className="bg-[#3f51b5] text-white">
              <CardTitle>Explorer's Pass</CardTitle>
              <CardDescription>
                <h2 className="text-lg font-bold">Level 1</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-red-500 cursor-pointer"> $20/GAME </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price per individual game session</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-green-500 cursor-pointer"> $80/ARC </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price for a complete story arc, typically consisting of multiple game sessions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2 mb-4">
                <li>
                  <XIcon className="inline mr-2" />
                  Start anytime
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Previous knowledge not required
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Cool Stickers
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Parental consent required (under 18)
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Advanced Player Options
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Models and Maps
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Access to Premium Content and Events
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Discounts for Dice Wizard Products
                </li>
              </ul>
            </CardContent>
          </div>
          <CardFooter>
            <Button variant="default">Play Now</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#f8f0e3] flex flex-col justify-between border border-gray-300 dark:border-gray-700">
          <div>
            <CardHeader className="bg-[#3f51b5] text-white">
              <CardTitle>Adventurer's Pass</CardTitle>
              <CardDescription>
                <h2 className="text-lg font-bold">Level 2</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-red-500 cursor-pointer"> $90/GAME </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price per individual game session</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-green-500 cursor-pointer"> $80/ARC </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price for a complete story arc, typically consisting of multiple game sessions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li>
                  <XIcon className="inline mr-2" />
                  Start anytime
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Previous knowledge not required
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Cool Stickers
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Parental consent required (under 18)
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Advanced Player Options
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Models and Maps
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Access to Premium Content and Events
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Discounts for Dice Wizard Products
                </li>
              </ul>
            </CardContent>
          </div>
          <CardFooter>
            <Button variant="default">Play Now</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#f8f0e3] flex flex-col justify-between border border-gray-300 dark:border-gray-700">
          <div>
            <CardHeader className="bg-[#3f51b5] text-white">
              <CardTitle>Heroes Pass</CardTitle>
              <CardDescription>
                <h2 className="text-lg font-bold">Level 3</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-red-500 cursor-pointer"> $30/GAME </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price per individual game session</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-2xl font-bold text-green-500 cursor-pointer"> $120/ARC </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price for a complete story arc, typically consisting of multiple game sessions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li>
                  <XIcon className="inline mr-2" />
                  Suitable for any experience level
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Previous knowledge not required
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Cool Stickers
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Learn to paint your own miniatures
                </li>
                <li>
                  <XIcon className="inline mr-2" />
                  Discounts for Dice Wizard Products
                </li>
              </ul>
            </CardContent>
          </div>
          <CardFooter>
            <Button variant="default">Play Now</Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="bg-[#f8f0e3] mt-10 flex flex-col justify-between border border-gray-300 dark:border-gray-700">
        <div>
          <CardHeader className="bg-[#3f51b5] text-white">
            <CardTitle>Online Heroes</CardTitle>
            <CardDescription>
              <h2 className="text-lg font-bold">Level 4</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-2xl font-bold text-red-500 cursor-pointer"> $25/GAME </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price per individual game session</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-2xl font-bold text-green-500 cursor-pointer"> $100/ARC </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Price for a complete story arc, typically consisting of multiple game sessions</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Play online with friends</p>
            <ul className="list-none space-y-2">
              <li>
                <XIcon className="inline mr-2" />
                Suitable for any experience level
              </li>
              <li>
                <XIcon className="inline mr-2" />
                Previous knowledge not required
              </li>
              <li>
                <XIcon className="inline mr-2" />
                Cool Stickers
              </li>
            </ul>
          </CardContent>
        </div>
        <CardFooter>
          <Button variant="default">Contact</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
