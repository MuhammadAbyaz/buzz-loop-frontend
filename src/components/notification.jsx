import Avatar from "./avatar";

export function Notification() {
  return (
    <div className="flex gap-x-4 p-4 rounded-lg bg-slate-100/50">
      <Avatar />
      <div className="flex-1 gap-y-1">
        <p className="text-sm font-medium">
          Abyaz <span className="font-normal text-muted-foreground">dk</span>
        </p>
        <p className="text-xs text-gray-400">2 hours ago</p>
      </div>
      <button></button>
    </div>
  );
}
