"use client";
import LoginForm from "@/components/LoginForm";
import Loading from "@/components/Loading";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      signIn("credentials", { ...{ email, password }, redirect: false });
      router.push("/your-bar-admin");
    } catch (err) {
      setError(err);
      console.error(err);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LoginForm loginUser={loginUser} error={error} />
      )}
    </>
  );
}
