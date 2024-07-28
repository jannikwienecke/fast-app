import { Client } from "./client"
import { prisma } from "./db"

export default async function Home() {
  const user = await prisma.user.findFirst()
  console.log({ user })

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        <div>First User::: {user?.name ?? "No user"}</div>
        <Client />
      </div>
    </main>
  )
}
