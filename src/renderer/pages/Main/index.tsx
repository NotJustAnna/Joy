import { faSteam } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faGamepad,
  faPlayCircle,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Main() {
  return (
    <div className="container flex flex-row gap-10">
      <div>
        <FontAwesomeIcon size="6x" icon={faSteam} />
        <p className="mt-4 font-bold">Big Picture</p>
      </div>
      <div>
        <FontAwesomeIcon size="6x" icon={faGamepad} />
        <p className="mt-4 font-bold">RetroArch</p>
      </div>
      <div>
        <FontAwesomeIcon size="6x" icon={faPlayCircle} />
        <p className="mt-4 font-bold">Kodi</p>
      </div>
      <div>
        <FontAwesomeIcon size="6x" icon={faDesktop} />
        <p className="mt-4 font-bold">Desktop</p>
      </div>
      <div>
        <FontAwesomeIcon size="6x" icon={faPowerOff} />
        <p className="mt-4 font-bold">System</p>
      </div>
    </div>
  );
}
