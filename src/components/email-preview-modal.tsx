import { Dialog, DialogTitle, DialogBody, DialogActions } from "./dialog";
import { CopyButton } from "./alert";
import { Button } from "./button";

interface EmailPreviewModalProps {
  open: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
  };
}

export function EmailPreviewModal({ open, onClose, formData }: EmailPreviewModalProps) {
  const to = "representative@example.com";
  const subject = "Support Science Budget Increase";
  const body = `Dear Representative,\n\nI urge you to vote in favor of increasing the science budget in Portugal.\n\nSincerely,\n${formData.name}\n${formData.email}`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded bg-white p-6">
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
              <pre className="whitespace-pre-wrap mt-2 p-3 bg-gray-50 rounded">
                {body}
              </pre>
              <CopyButton text={body} />
            </div>
          </DialogBody>

          <DialogActions>
            <Button onClick={onClose}>Close</Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
}
