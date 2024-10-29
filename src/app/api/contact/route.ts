import type { NextApiRequest, NextApiResponse } from "next";

// TODO: Implement email sending
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;
    console.log({ name, email, phone, message });

    // Here you can handle the form data, e.g., send an email or save to a database
    // For example, using nodemailer to send an email

    // Example response
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
