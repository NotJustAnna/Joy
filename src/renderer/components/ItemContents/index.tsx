import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ItemContentProps {
  icon: IconProp;
  title: string;
}

export default function ItemContents({ icon, title }: ItemContentProps) {
  return (
    <>
      <FontAwesomeIcon size="6x" fixedWidth icon={icon} />
      <p className="mt-4 font-bold">{title}</p>
    </>
  );
}
