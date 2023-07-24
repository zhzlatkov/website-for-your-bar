import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Separator({ withIcon = true }) {
  return (
    <div
      className={
        (withIcon ? "-my-3.5 " : "") + "flex w-screen items-center z-10 m-auto"
      }
    >
      <div className="h-1 w-auto m-auto grow bg-gradient-to-r from-pirateGold-500 from-50% to-pirateGold-100"></div>
      {withIcon ? (
        <div className="flex justify-center m-auto items-center bg-pirateGold-500 w-8 h-8 rounded-full border-2 border-pirateGold-100 z-10">
          <FontAwesomeIcon
            icon={faMartiniGlass}
            size="l"
            className="text-pirateGold-100 mx-auto"
          />
        </div>
      ) : null}
      <div className="h-1 w-auto m-auto grow bg-gradient-to-r from-pirateGold-100 to-pirateGold-500 to-50%"></div>
    </div>
  );
}
