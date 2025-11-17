import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
}

export default function SocialShare({ title, description, url }: SocialShareProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = description || title;

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
    
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('social_share', { platform: 'linkedin', title });
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=600');
    
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('social_share', { platform: 'twitter', title });
    }
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${shareText}\n\nRead more: ${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('social_share', { platform: 'email', title });
    }
  };

  return (
    <Card className="bg-muted/30 border-border/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Share2 className="h-5 w-5" />
          Share This Content
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={shareOnLinkedIn}
            variant="outline"
            className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white border-[#0077B5] hover:border-[#006399]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            onClick={shareOnTwitter}
            variant="outline"
            className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white border-[#1DA1F2] hover:border-[#1a8cd8]"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          <Button
            onClick={shareViaEmail}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
