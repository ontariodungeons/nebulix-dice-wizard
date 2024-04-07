/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Je8EcZnqPq3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function GameSignup() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4 md:p-8 border-2 border-gray-300 shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 md:text-4xl lg:text-5xl">
        DICE WIZARD GAMES SIGN UP
      </h1>
      <form className="space-y-8 text-blue-700" onSubmit={undefined}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col space-y-1.5 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
            <Input
              aria-describedby="name-help"
              className="focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-green-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-300"
              id="name"
              onChange={undefined}
              placeholder="Name *"
              value={undefined}
            />
            <p className="text-xs text-gray-500 md:text-sm lg:text-base" id="name-help">
              Please enter your full name.
            </p>
          </div>
          <div className="flex flex-col space-y-1.5 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
            <Input
              aria-describedby="username-help"
              className="focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-green-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-300"
              id="username"
              onChange={undefined}
              placeholder="Username *"
              value={undefined}
            />
            <p className="text-xs text-gray-500 md:text-sm lg:text-base" id="username-help">
              Choose a unique username for your account.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <Label className="sr-only" htmlFor="pronouns">
            Pronouns *
          </Label>
          <Select
            className="focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-green-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-300"
            id="pronouns"
            onChange={undefined}
            value={undefined}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pronouns *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="he/him">He/Him</SelectItem>
              <SelectItem value="she/her">She/Her</SelectItem>
              <SelectItem value="they/them">They/Them</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <fieldset className="space-y-2 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <legend className="font-medium text-xs md:text-sm lg:text-base">Game Selection *</legend>
          <RadioGroup
            className="transition-all duration-500 ease-in-out"
            defaultValue="junior"
            onChange={undefined}
            value={undefined}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="game-junior" value="junior" />
              <Label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="game-junior">
                Junior (This is for the 8-12, and 13-17 games)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="game-adventurer" value="adventurer" />
              <Label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="game-adventurer">
                Adventurer (For all ages, tables grouped by preference and age)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="game-heroes" value="heroes" />
              <Label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="game-heroes">
                Heroes (High level gameplay, expanded rules, backstories, and more)
              </Label>
            </div>
          </RadioGroup>
        </fieldset>
        <fieldset className="space-y-2 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <legend className="font-medium text-xs md:text-sm lg:text-base">Game Location Preference *</legend>
          <RadioGroup
            className="transition-all duration-500 ease-in-out"
            defaultValue="public"
            onChange={undefined}
            value={undefined}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="location-public" value="public" />
              <Label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="location-public">
                In Person
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="location-virtual" value="virtual" />
              <Label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="location-virtual">
                Online
              </Label>
            </div>
          </RadioGroup>
        </fieldset>
        <fieldset className="space-y-2 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <legend className="font-medium text-xs md:text-sm lg:text-base">Preferred Days of the Week</legend>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="monday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="monday">
                Monday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="tuesday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="tuesday">
                Tuesday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="wednesday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="wednesday">
                Wednesday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="thursday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="thursday">
                Thursday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="friday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="friday">
                Friday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="saturday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="saturday">
                Saturday
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="sunday" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="sunday">
                Sunday
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="space-y-2 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <legend className="font-medium text-xs md:text-sm lg:text-base">Expanded Interests</legend>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="weekend-games" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="weekend-games">
                Weekend Game Nights
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="sos" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="sos">
                S.O.S (Session Zero Social)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="nerd-nook" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="nerd-nook">
                Nerd Nook - Learn, and build together in a public space.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="game-retreats" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="game-retreats">
                Weekend Game Retreats - Leave the city behind and go on a weekend vacation to play D&D
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={undefined} id="dnd-camp" onChange={undefined} />
              <label className="text-xs ml-2 md:text-sm lg:text-base" htmlFor="dnd-camp">
                D&D Camp - Work in Progress, please inquire
              </label>
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col space-y-1 border-t-4 border-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
          <Textarea
            aria-describedby="about-help"
            className="focus:ring-2 focus:ring-gradient-to-r focus:from-blue-500 focus:to-green-500 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-300"
            id="about"
            onChange={undefined}
            placeholder="Tell me a bit about yourself, the games you want to play, or share a story."
            value={undefined}
          />
          <p className="text-xs text-gray-500 md:text-sm lg:text-base" id="about-help">
            Feel free to share any relevant experience or interests.
          </p>
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-700" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

