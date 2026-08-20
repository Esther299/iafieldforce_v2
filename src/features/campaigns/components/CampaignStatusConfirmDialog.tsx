import { ConfirmDialog } from "@/shared/ui";
import type { CampaignStatus } from "@/shared/types";

interface CampaignStatusConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  pendingStatus: CampaignStatus | null;
  onConfirm: () => void;
}

export function CampaignStatusConfirmDialog({
  isOpen,
  onClose,
  pendingStatus,
  onConfirm,
}: CampaignStatusConfirmDialogProps) {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Cambiar estado de campaña"
      description={`¿Estás seguro de cambiar el estado de la campaña a "${pendingStatus}"?`}
      confirmText="Cambiar"
      cancelText="Cancelar"
      onConfirm={onConfirm}
    />
  );
}
