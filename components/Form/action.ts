"use server";
import nodemailer from "nodemailer";

export const sendForm = async (formData: {
  email: string;
  inquiry: string;
}) => {
  const { email, inquiry } = formData;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_PROVIDER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: "Anfrage via Homepage",
      text: `${email} schreibt: ${inquiry}`,
    });
  } catch (error) {
    throw new Error("Email could not be sent!", error);
  }
};
