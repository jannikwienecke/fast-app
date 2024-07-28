import { test, expect } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByText(/You clicked 0 times/)).toBeVisible()

  await page.click("text=Click me")

  await expect(page.getByText(/You clicked 1 times/)).toBeVisible()
})

test("has counter", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByText(/You clicked 0 times/)).toBeVisible()
})
