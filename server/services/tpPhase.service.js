export const determinePhase = (student) => {
  if (!student.hasSeenWelcome) return 'welcome';
  console.log("The rest was not never executed");

  const { documentStatus, finalDocumentStatus, supervisionCount, hasSupervisorAssigned, canSubmitFinalDocs } = student;

  if (finalDocumentStatus === 'APPROVED') return 'completed';
  if (finalDocumentStatus === 'REJECTED') return 'post-tp';
  if (!documentStatus || documentStatus === 'REJECTED') return 'document-submission';
  if (documentStatus === 'PENDING') return 'pre-tp';

  if (documentStatus === 'APPROVED' && supervisionCount >= 3 && canSubmitFinalDocs) return 'post-tp';
  if (documentStatus === 'APPROVED' && hasSupervisorAssigned) return 'assessment';
  if (documentStatus === 'APPROVED') return 'active-tp';

  return 'error';
};