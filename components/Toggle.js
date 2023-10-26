import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({
  state,
  handleStateChange,
  blockEnabling = false,
}) {
  const [enabled, setEnabled] = useState(state);
  const changeState = () => {
    if (blockEnabling && !enabled === false) return;
    setEnabled(!enabled);
    handleStateChange(!enabled);
  };
  return (
    <Switch
      checked={enabled}
      onChange={changeState}
      className={classNames(
        enabled ? "bg-pirateGold-600" : "bg-shark-800",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-pirateGold-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ring-offset-pirateGold-400 focus:ring-pirateGold-600 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-pirateGold-200 shadow ring-0 ring-offset-pirateGold-400 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}
