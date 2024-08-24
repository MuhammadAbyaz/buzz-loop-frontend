import { Notification } from "../components/notification";

export function Notifications() {
  const notifications = Array(20).fill(0);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-y-3 w-[40%]">
        {notifications.map((val, idx) => {
          return <Notification key={idx} />;
        })}
      </div>
    </div>
  );
}
