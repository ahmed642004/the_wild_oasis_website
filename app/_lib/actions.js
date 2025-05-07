"use server";
import { signIn, signOut } from "./auth";

export async function signInAction(formData) {
  const provider = formData.get("provider");

  await signIn(provider, {
    callbackUrl: "/account",
    redirectTo: '/'
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
