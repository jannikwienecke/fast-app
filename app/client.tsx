"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import React from "react"

export const Client = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    console.log("Client rendered", { count })
  })

  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <p className="flex flex-row items-center justify-center">
            You clicked{" "}
            <span className="min-w-[35px] grid place-items-center font-bold">
              {count}
            </span>{" "}
            times
          </p>

          <Button onClick={() => setCount(count + 1)}>Click me</Button>

          <Slider
            value={[count]}
            onValueChange={(values) => setCount(values[0])}
            max={100}
            step={1}
            className={cn("w-[60%] pt-4")}
          />
        </CardContent>
      </Card>
    </div>
  )
}
