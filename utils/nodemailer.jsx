/** @format */

import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export const smtpEmail = process.env.GOOGLE_EMAIL;
export const smtpPassword = process.env.GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport(
	smtpTransport({
		service: "gmail",
		auth: {
			user: smtpEmail,
			pass: smtpPassword,
		},
	})
);
