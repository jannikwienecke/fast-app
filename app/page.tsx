import { Client } from "./client"
import { prisma } from "./db"

export default async function Home() {
  const user = await prisma.user.findMany()

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        {user?.map((user) => (
          <div key={user.id}>
            <div>User::: {user.name ?? "No user"}</div>
          </div>
        ))}

        <Client />
      </div>
    </main>
  )
}
