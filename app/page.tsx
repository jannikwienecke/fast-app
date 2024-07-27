import { Client } from "./client"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {
  const x = await prisma.user.findMany()
  console.log(x)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client />
    </main>
  )
}
