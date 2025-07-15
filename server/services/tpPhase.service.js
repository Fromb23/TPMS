export const determinePhase = (student) => {
  if (!student.hasSeenWelcome) return 'welcome';

  const { documentStatus, finalDocumentStatus, supervisionCount, assessmentRequested, canSubmitFinalDocs, assessmentInProgress } = student;

  if (finalDocumentStatus === 'APPROVED') return 'completed';
  if (finalDocumentStatus === 'REJECTED') return 'post-tp';
  if (!documentStatus || documentStatus === 'REJECTED') return 'document-submission';
  if (documentStatus === 'PENDING') return 'pre-tp';

if (!assessmentRequested && supervisionCount >= 3 && canSubmitFinalDocs) {
    return 'post-tp';
  }
  if (assessmentRequested) return 'assessment';

  return 'active-tp';
};