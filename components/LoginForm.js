import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loading from "./Loading";

export default function LoginForm({ loginUser, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      console.log(status, session);
      if (status === "loading") {
        setIsLoading(true);
        return;
      }
      if (
        status === "authenticated" &&
        new Date() < new Date(session?.expires)
      ) {
        await router.push("./your-bar-admin/");
        return;
      }
      setIsLoading(false);
    })();
  }, [session, status, router]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <>
      <div className="flex min-h-screen bg-shark-950 flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-pirateGold-500">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={onSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-pirateGold-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 bg-shark-700 text-center font-medium text-pirateGold-200 shadow-sm ring-1 ring-inset ring-shark-500 placeholder:text-pirateGold-400 focus:ring-2 focus:ring-inset focus:ring-pirateGold-900 sm:text-sm sm:leading-6"
                  onChange={onEmailChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-pirateGold-300"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 bg-shark-700 text-center font-medium text-pirateGold-200 shadow-sm ring-1 ring-inset ring-shark-500 placeholder:text-pirateGold-400 focus:ring-2 focus:ring-inset focus:ring-pirateGold-900 sm:text-sm sm:leading-6"
                  onChange={onPasswordChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-pirateGold-600 px-3 py-1.5 text-sm font-semibold leading-6 text-shark-100 shadow-sm hover:bg-pirateGold-400 hover:text-shark-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shark-400"
              >
                Sign in
              </button>
            </div>
          </form>
          {error ? (
            <p className="mt-4 text-center text-sm text-red-500">
              {error?.message}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
