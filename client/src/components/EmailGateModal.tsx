import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface EmailGateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfType: 'study' | 'elaborated_study';
  pdfUrl: string;
  pdfFileName: string;
  onSuccess?: () => void;
}

export function EmailGateModal({ open, onOpenChange, pdfType, pdfUrl, pdfFileName, onSuccess }: EmailGateModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const captureLead = trpc.leads.capture.useMutation({
    onSuccess: () => {
      // Track analytics
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('lead_captured', { pdfType });
      }
      
      // Trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Thank you! Your download will begin shortly.");
      onOpenChange(false);
      
      // Reset form
      setName("");
      setEmail("");
      
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast.error("Failed to process your request. Please try again.");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    captureLead.mutate({ name, email, pdfType });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            Download Full Report
          </DialogTitle>
          <DialogDescription>
            Enter your details to receive the complete feasibility study. We'll never share your information.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={captureLead.isPending}
              className="flex-1 gap-2"
            >
              {captureLead.isPending ? (
                "Processing..."
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
