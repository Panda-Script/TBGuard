import { AlertDialogProps } from "../../types";

export const AlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  onCancel,
}: AlertDialogProps) => {
  if (!open) return null;
  return (
    <div className="alert-dialog-overlay">
      <div className="alert-dialog">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="alert-dialog-actions">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={() => { onCancel?.(); onOpenChange(false); }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}; 
