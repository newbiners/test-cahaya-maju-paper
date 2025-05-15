// lambda function to send email
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
    const body = JSON.parse(event.body);
    console.log(body);

    // validate body
    if (!body.email) {
        return {
            statusCode: 400,
            body: "Email is required",
        };
    }
    if (!body.name) {
        return {
            statusCode: 400,
            body: "Name is required",
        };
    }
    if (!body.message) {
        return {
            statusCode: 400,
            body: "Message is required",
        };
    }
    if (!body.phone) {
        return {
            statusCode: 400,
            body: "Phone is required",
        };
    }
    if (!body.__cf_turnstile_token) {
        return {
            statusCode: 400,
            body: "Captcha token is required",
        };
    }

    // get remoteip
    const remoteip = event.headers["x-forwarded-for"] || "127.0.0.1";

    // validate turnstile token
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: body.__cf_turnstile_token,
            remoteip: remoteip,
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const outcome = await result.json();
    if (!outcome.success) {
        return {
            statusCode: 400,
            body: {
                message: "Captcha token is invalid",
                outcome: outcome,
            },
        };
    }

    // send email using ses
    var message = `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`;
    const command = new SendEmailCommand({
        Destination: {
            ToAddresses: ["contact@teamtechnology.global"],
        },
        Message: {
            Subject: { Data: "New Contact Form Submission" },
            Body: { Text: { Data: message } },
        },
        ReplyToAddresses: [body.email],
        Source: "TTG Contact Form <contact@teamtechnology.global>",
    });

    const response = await ses.send(command);
    console.log(response);

    return response;
};
