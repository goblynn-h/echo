import { Plus } from 'lucide-react';

export default function AddCoverButton({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="w-40 h-64 border-2 border-dashed border-app-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-app-hover transition-colors shrink-0">
      <Plus className="w-8 h-8 text-app-text-muted" />
    </div>
  );
}
