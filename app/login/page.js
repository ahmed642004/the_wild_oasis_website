import { headers } from "next/headers";
import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default async function Page() {
  const headersList = await headers(); // ✅ await here
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;
  const session = await fetch(`${baseUrl}/api/auth/providers`);
  const data = await session.json();
  const providers = Object.keys(data);

  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      {providers.map((provider) => (
        <SignInButton key={provider} provider={provider} />
      ))}
    </div>
  );
}
