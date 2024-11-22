import { Dialog, DialogTitle, DialogBody, DialogActions } from "./dialog";
import { CopyButton } from "./alert";
import { Button } from "./button";

export default function EmailPreviewModal({ isOpen, onClose, formData }) {
  const to = "representative@example.com";
  const subject = "Support Science Budget Increase";
  const body = `Dear Representative,\n\nI urge you to vote in favor of increasing the science budget in Portugal.\n\nSincerely,\n${formData.name}\n${formData.email}`;

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogTitle>Email Preview</DialogTitle>
      <DialogBody>
        <div className="mb-4">
          <strong>To:</strong> {to} <CopyButton text={to} />
        </div>
        <div className="mb-4">
          <strong>Subject:</strong> {subject} <CopyButton text={subject} />
        </div>
        <div className="mb-4">
          <strong>Body:</strong>
          <pre className="whitespace-pre-wrap">{body}</pre> <CopyButton text={body} />
        </div>
      </DialogBody>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
