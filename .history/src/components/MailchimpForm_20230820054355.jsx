import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
``}

If you are still encountering issues, the problem might be related to how your environment variables are configured or accessed. Please review the steps I've previously provided to ensure that your environment variables are correctly set up in your `.env` or `.env.local` file and that you have restarted your development server after making changes.

If you've verified the environment variables and followed the troubleshooting steps without success, it might be helpful to provide additional details about your project setup, including your directory structure, how you're running the development server, and any relevant configuration files. This can help in diagnosing the issue more accurately.


