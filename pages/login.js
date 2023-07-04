import LoginForm from "@/components/LoginForm";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { isAuthorized } from "@/calls/is-authorized.js";

export default function Login() {
  const [isCheckedFinished, setIsCheckedFinished] = useState(true);

  useEffect(() => {
    (async function () {
      const res = await isAuthorized();
      if (res.status == 200) {
        return Router.push("/your-bar-admin");
      }
      setIsCheckedFinished(true);
    })();
  }, []);

  return <>{isCheckedFinished ? <LoginForm /> : <Loading />}</>;
}
