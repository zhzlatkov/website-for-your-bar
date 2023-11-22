import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Separator({ withIcon = true }) {
  return (
    <div
      className={(withIcon ? "-mt-3.5 " : "") + "flex items-center z-10 m-auto"}
    >
      <div className="h-1 w-auto m-auto grow shadow-md shadow-pirateGold-700 bg-gradient-to-r from-pirateGold-500 from-50% to-pirateGold-100"></div>
      {withIcon ? (
        <div className="flex justify-center m-auto items-center bg-pirateGold-500 shadow-md shadow-pirateGold-700 w-8 h-8 rounded-full border-2 border-pirateGold-100 z-10">
          <FontAwesomeIcon
            icon={faMartiniGlass}
            size="lg"
            className="text-pirateGold-100 mx-auto"
          />
        </div>
      ) : null}
      <div className="h-1 w-auto m-auto grow bg-gradient-to-r from-pirateGold-100 shadow-md shadow-pirateGold-700 to-pirateGold-500 to-50%"></div>
    </div>
  );
}
