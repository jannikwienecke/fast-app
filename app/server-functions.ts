"use server"

export const addUser = async (form: FormData) => {
  const email = form.get("email") ?? ""
  const name = form.get("name")

  console.log("addUser", { email, name })
}
