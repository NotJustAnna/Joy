import Input from './Input';
import Time from './Time';

export default function TopBar() {
  return (
    <div className="absolute top-0 left-0 flex flex-row mt-4 ml-4 gap-3">
      <p className="font-bold text-2xl">
        <Time />
      </p>
      <p className="my-1 flex flex-row gap-2">
        <Input />
      </p>
    </div>
  );
}
