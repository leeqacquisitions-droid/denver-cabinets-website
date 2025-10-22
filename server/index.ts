import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { createServer } from "http";
import OpenAI from "openai";
import { setupVite } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// OpenAI chat endpoint for the AI assistant
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

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

const server = createServer(app);

// Development vs Production
const isDevelopment = process.env.NODE_ENV !== "production" && process.env.REPLIT_DEPLOYMENT !== "1";

(async () => {
  if (isDevelopment) {
    // Development: Use Vite dev server with HMR
    await setupVite(app, server);
  } else {
    // Production: Serve static files from dist/public
    app.use(express.static(path.join(process.cwd(), "dist", "public")));
    
    // Catch-all route to serve index.html for client-side routing
    app.get("*", (_req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "public", "index.html"));
    });
  }

  // Start server
  const port = process.env.PORT ? Number(process.env.PORT) : 5000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
})();
