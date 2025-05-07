import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton({ provider }) {
  return (
    <form action={signInAction}>
      <button className="flex cursor-pointer items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src={`https://authjs.dev/img/providers/${provider}.svg`}
          alt="Google logo"
          height={24}
          width={24}
        />
        <span>Continue with {provider}</span>
        <input type="hidden" name="provider" value={provider} />
      </button>
    </form>
  );
}

export default SignInButton;
