'use client';

import { useModal } from "../context/ModalContext";
import SecurityAssessmentModal from "./SecurityAssessmentModal";

export default function GlobalModals() {
  const { isSecurityModalOpen, closeSecurityModal } = useModal();

  return (
    <SecurityAssessmentModal 
      isOpen={isSecurityModalOpen} 
      onClose={closeSecurityModal} 
    />
  );
}
