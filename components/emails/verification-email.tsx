import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#f4f4f4", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ backgroundColor: "#ffffff", maxWidth: "600px", margin: "40px auto", padding: "30px", borderRadius: "6px" }}>
          
          {/* Header */}
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Text style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>
              Confirm Your Email
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={{ marginBottom: "24px" }}>
            <Text style={{ fontSize: "16px", color: "#333", marginBottom: "16px" }}>
              Hi {userName || "there"},
            </Text>
            <Text style={{ fontSize: "16px", color: "#333", marginBottom: "16px" }}>
              Thanks for signing up! Please confirm your email to activate your NoteForge account by clicking the button below.
            </Text>
          </Section>

          {/* Verification Button */}
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Button
              href={verificationUrl}
              style={{
                backgroundColor: "#2563EB",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "4px",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Confirm Email
            </Button>
          </Section>

          {/* Alternative Link */}
          <Section style={{ marginBottom: "24px" }}>
            <Text style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
              If the button doesn&apos;t work, copy and paste this link into your browser:
            </Text>
            <Text style={{ fontSize: "14px", color: "#2563EB", wordBreak: "break-all" }}>
              {verificationUrl}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ borderTop: "1px solid #ddd", paddingTop: "16px" }}>
            <Text style={{ fontSize: "12px", color: "#777", marginBottom: "4px" }}>
              This email was sent by NoteForge.
            </Text>
            <Text style={{ fontSize: "12px", color: "#777" }}>
              You’re receiving this because you signed up on our website.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
};

export default VerificationEmail;

