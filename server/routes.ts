import type { Express } from "express";
import { createServer, type Server } from "http";
import OpenAI from "openai";
import { Resend } from "resend";

// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key.
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Chat Assistant endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, messages = [] } = req.body;

      const systemPrompt = `You are a helpful assistant for Estate Solutions, a cabinet installation company in Denver, Colorado. 

Key information to share with customers:
- Services: Professional installation of pre-manufactured cabinets for kitchens, bathrooms, and pantries
- We do NOT build custom cabinets - we assemble and install pre-manufactured cabinets (semi-custom in field when needed)
- We serve: General contractors, property managers, and homeowners
- Service area: Denver metro area, Colorado
- Process: Free 30-minute in-home design consultation → 70% down payment for materials → Installation (4-6 days for most kitchens) → 30% final payment
- Contact: Phone (720) 224-2908, Email josue@denvercabinets.net
- Specialties: New construction, remodels, multi-unit properties, sobriety houses

Be friendly, professional, and helpful. If asked about pricing, explain that we provide quotes during the free consultation. Encourage users to schedule a consultation or contact us directly for specific questions.`;

      // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      const completion = await openai.chat.completions.create({
        model: "gpt-5-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-5).map((msg: any) => ({ role: msg.role, content: msg.content })),
          { role: "user", content: message }
        ],
        max_completion_tokens: 500
      });

      const assistantMessage = completion.choices[0]?.message?.content || 
        "I'm here to help! Please call us at (720) 224-2908 or email josue@denvercabinets.net for assistance.";

      res.json({ message: assistantMessage });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        message: "I apologize for the inconvenience. Please contact us directly at (720) 224-2908 or josue@denvercabinets.net." 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, clientType, projectType, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, and message are required." 
        });
      }

      // Format client type and project type for display
      const clientTypeLabels: Record<string, string> = {
        "contractor": "General Contractor",
        "property-manager": "Property Manager",
        "homeowner": "Homeowner",
        "other": "Other"
      };

      const projectTypeLabels: Record<string, string> = {
        "new-construction": "New Construction",
        "remodel": "Remodel/Renovation",
        "multi-unit": "Multi-Unit Property",
        "kitchen": "Kitchen",
        "bathroom": "Bathroom",
        "pantry": "Pantry",
        "custom": "Custom Project"
      };

      // Send email using Resend
      console.log("Attempting to send email to josue@denvercabinets.net");
      const { data, error } = await resend.emails.send({
        from: "Estate Solutions Contact Form <onboarding@resend.dev>",
        to: ["josue@denvercabinets.net"],
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${clientType ? `<p><strong>Client Type:</strong> ${clientTypeLabels[clientType] || clientType}</p>` : ""}
          ${projectType ? `<p><strong>Project Type:</strong> ${projectTypeLabels[projectType] || projectType}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error("Resend error details:", JSON.stringify(error, null, 2));
        return res.status(500).json({ error: "Failed to send email. Please try again or call us at (720) 224-2908." });
      }

      console.log("Email sent successfully:", data);
      res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Failed to send message. Please call us at (720) 224-2908 or email josue@denvercabinets.net directly." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
