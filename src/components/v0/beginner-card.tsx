/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sTAG2cS4jDf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-[350px] transition-all duration-500 ease-in-out transform hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-4 text-white font-bold text-xl rounded-t-lg">
        <CardTitle>EXPLORER'S PASS</CardTitle>
        <CardDescription className="text-sm">Embark on your journey</CardDescription>
      </CardHeader>
      <CardContent className="bg-[#F3E8EE] p-4">
        <div className="text-center font-bold mb-2">$20/QUEST or $80/EPIC</div>
        <div className="bg-black text-white text-center py-1">LEVEL 1-5</div>
        <ul className="list-inside mt-4 space-y-2">
          <li className="flex items-center space-x-2">
            <ShieldIcon className="text-green-500" />
            <span>Start anytime</span>
          </li>
          <li className="flex items-center space-x-2">
            <BookIcon className="text-green-500" />
            <span>No previous knowledge required</span>
          </li>
          <li className="flex items-center space-x-2">
            <StarIcon className="text-green-500" />
            <span>Collect unique stickers</span>
          </li>
          <li className="flex items-center space-x-2">
            <ScrollIcon className="text-green-500" />
            <span>Parental consent required (under 18)</span>
          </li>
          <li className="flex items-center space-x-2">
            <CrossIcon className="text-red-500" />
            <span>Advanced Player Options</span>
          </li>
          <li className="flex items-center space-x-2">
            <CrossIcon className="text-red-500" />
            <span>Access to exclusive maps</span>
          </li>
          <li className="flex items-center space-x-2">
            <CrossIcon className="text-red-500" />
            <span>Access to Premium Content and Events</span>
          </li>
          <li className="flex items-center space-x-2">
            <CrossIcon className="text-red-500" />
            <span>Discounts for Dice Wizard Products</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="bg-[#F3E8EE] p-4">
        <Button className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-2 rounded-md shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 transition-all duration-500 ease-in-out transform hover:scale-105">
          BEGIN ADVENTURE
        </Button>
      </CardFooter>
    </Card>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CrossIcon(props) {
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
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}


function ScrollIcon(props) {
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
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
