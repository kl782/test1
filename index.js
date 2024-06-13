/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7yay9V3iRf7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7yay9V3iRf7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7yay9V3iRf7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Welcome to SuperAcme</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
            <PowerIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
            <UserIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 md:p-10 grid gap-6">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              className="w-full h-full"
              src="https://teachablemachine.withgoogle.com/models/[YOUR_MODEL_ID]/embed"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">Facial Recognition</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-6 md:p-8 grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Attendance</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                View History
              </Button>
              <Button size="sm">Take Attendance</Button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Arrived at 9:00 AM</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">Present</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <DotIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Arrived at 9:15 AM</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">Present</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <DotIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" alt="Michael Johnson" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Arrived at 9:30 AM</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">Present</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <DotIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function DotIcon(props) {
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function PowerIcon(props) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}