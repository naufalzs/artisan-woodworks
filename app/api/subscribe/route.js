import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "email is required" }, { status: 401 });
  }

  const mailchimpData = {
    members: [{ email_address: email, status: "subscribed" }],
  };

  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const URL = `https://us12.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(mailchimpData),
    });

    const data = await response.json();

    if (data.errors[0]?.error) {
      return NextResponse.json({ error: data.errors[0].error });
    } else {
      return NextResponse.json({ success: true }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong, please try again later." },
      { status: 401 }
    );
  }
};
