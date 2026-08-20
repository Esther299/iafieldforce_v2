import { ConfirmDialog } from "../../ui";

interface CampaignDeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  campaignName?: string;
  onConfirm: () => void;
}

export function CampaignDeleteConfirmDialog({
  isOpen,
  onClose,
  campaignName,
  onConfirm,
}: CampaignDeleteConfirmDialogProps) {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Eliminar campaña"
      description={`¿Estás seguro de que deseas eliminar la campaña "${campaignName}"? Esta acción no se puede deshacer.`}
      confirmText="Eliminar permanentemente"
      cancelText="Cancelar"
      onConfirm={onConfirm}
    />
  );
}
