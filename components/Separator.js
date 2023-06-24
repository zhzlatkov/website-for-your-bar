import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Separator({ withIcon = true }) {
  return (
    <div className={(withIcon ? "-my-5 " : "") + "flex items-center z-10 "}>
      <div className="h-2 w-auto grow bg-gradient-to-r from-yellow-400 to-white"></div>
      {withIcon ? (
        <div className="flex justify-center items-center bg-yellow-400 w-12 h-12 rounded-full border-4 border-white z-10">
          <FontAwesomeIcon
            icon={faMartiniGlass}
            size="xl"
            className="text-white mx-auto"
          />
        </div>
      ) : null}
      <div className="h-2 w-auto grow bg-gradient-to-r from-white to-yellow-400"></div>
    </div>
  );
}
