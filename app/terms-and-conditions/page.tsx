import Header from "@/components/landing/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <>
      <Header />

      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full text-white">
        <Button
          asChild
          size="lg"
          className="bg-white text-indigo-700 font-bold"
        >
          <Link href="/">Go Back</Link>
        </Button>

        <section className="mt-20">
          <p>
            <span className="text-3xl font-bold">Terms and Conditions</span>
            <br />
            <br />
            1. Acceptance of Terms
            <br />
            <br />
            By accessing and using Pixelcraft AI, you agree to be bound by these
            Terms and Conditions.
            <br />
            <br />
            2. User Responsibilities
            <br />
            <br />
            Users are expected to use the platform responsibly. Any violent or
            unlawful activities will be reported to authorities, and the account
            will be closed.
            <br />
            <br />
            3. User Support
            <br />
            <br />
            For support, contact ryanbakkerdev@gmail.com.
            <br />
            <br />
            4. User Contributions
            <br />
            <br />
            Images created by users belong to them. The platform claims no
            ownership unless specified by the original creator.
            <br />
            <br />
            5. Security
            <br />
            <br />
            Security is handled by Clerk Auth, Stripe, and Cloudinary.
            Pixelcraft AI holds no responsibility for security breaches.
            <br />
            <br />
            6. Maintenance and Downtime
            <br />
            <br />
            Maintenance and downtime are subject to Vercels policies.
            <br />
            <br />
            7. Changes to Service
            <br />
            <br />
            Users will be notified of significant changes to the platform.
            <br />
            <br />
            8. Age Restrictions
            <br />
            <br />
            There are no age restrictions for using the platform.
            <br />
            <br />
            9. Data Tracking
            <br />
            <br />
            Pixelcraft AI does not personally track user data. Refer to the
            terms of service and privacy policies of Clerk Auth, Stripe,
            Cloudinary, and Next.js for their data handling practices.
            <br />
            <br />
            10. Disclaimer of Responsibility
            <br />
            <br />
            Pixelcraft AI holds no responsibility for the actions of users,
            security breaches, or third-party services.
            <br />
            <br />
            11. Indemnification
            <br />
            <br />
            Users agree to indemnify and hold Pixelcraft AI harmless from any
            claims, damages, or losses arising from their use of the platform.
            <br />
            <br />
            12. Governing Law
            <br />
            <br />
            These Terms and Conditions are governed by the laws of [Your
            Jurisdiction].
            <br />
            <br />
            13. Contact Information
            <br />
            <br />
            For questions or concerns regarding these Terms and Conditions,
            please contact ryanbakkerdev@gmail.com.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
