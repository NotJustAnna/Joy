import { useNavigate } from 'react-router-dom';
import Menu, { Item } from '../../components/Menu';
import { useConfig } from '../../utils/config/context';
import { parseItems } from './items';

export default function Main() {
  const config = useConfig();
  const navigate = useNavigate();

  const items: Item[] = parseItems(config?.items ?? [], navigate);

  if (items.length === 0) {
    return (
      <div>
        <h1 className="font-bold text-4xl">No items!</h1>
        <p className="text-lg">
          Add some items to the config file to get started.
        </p>
      </div>
    );
  }

  return <Menu items={items} />;
}
