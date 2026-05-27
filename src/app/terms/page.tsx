import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use for curepo.dev",
  description: "The terms governing your use of curepo.dev.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-margin-desktop py-stack-lg">
      <h1 className="font-display-lg text-display-lg font-extrabold text-on-surface mb-stack-sm">
        Terms of Use for curepo.dev
      </h1>

      <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
        Last updated: 27.5.26
      </p>

      <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
        Welcome to curepo. These Terms of Use explain the rules for using our
        website and service. By accessing or using curepo, you agree to these
        Terms. If you do not agree, please do not use the website.
      </p>

      <div className="flex flex-col gap-stack-lg">
        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            1. Acceptance
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            By visiting, browsing, or using curepo, you confirm that you have
            read, understood, and agree to be bound by these Terms of Use.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            If you use curepo on behalf of a company, organization, or other legal
            entity, you confirm that you have authority to accept these Terms on
            its behalf.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            We may update these Terms from time to time. Your continued use of
            curepo after changes are posted means you accept the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            2. Description of Service
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            curepo is a free, curated directory that helps users discover
            publicly available third-party GitHub repositories.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            curepo may include repository names, descriptions, tags, categories,
            links, and other publicly available information. curepo does not
            host, own, create, maintain, review, guarantee, or control any of
            the repositories, code, projects, software, files, packages,
            documentation, or content listed on or linked from the website.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            All repositories and software listed through curepo belong to their
            respective owners, authors, maintainers, or contributors.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            curepo is only a discovery and linking service.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            3. No Warranty
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            curepo is provided on an “as is” and “as available” basis.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            We make no warranties or promises of any kind, whether express,
            implied, or statutory, including but not limited to warranties of
            accuracy, reliability, availability, fitness for a particular
            purpose, non-infringement, security, or that the service will be
            error-free or uninterrupted.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            We do not guarantee that any repository listed on curepo is safe,
            secure, useful, accurate, maintained, compatible with your system,
            properly licensed, free from bugs, free from malware, or suitable
            for any purpose.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            You use curepo entirely at your own risk.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            4. Third-Party Repositories &amp; Software
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            curepo links to third-party GitHub repositories and other external
            resources. These repositories and resources are not owned or
            controlled by curepo.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            We are not responsible or liable for any third-party repository,
            code, software, package, file, documentation, license, issue, pull
            request, release, dependency, or other content that you view,
            access, download, install, run, copy, modify, or use after finding
            it through curepo.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Before using any repository or software, you are solely responsible
            for reviewing it yourself. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-5 mt-4 font-body-md text-body-md text-on-surface-variant space-y-2">
            <li>checking the source code;</li>
            <li>reviewing dependencies;</li>
            <li>verifying security and safety;</li>
            <li>testing the software in an appropriate environment;</li>
            <li>reviewing the license terms;</li>
            <li>confirming that you have the right to use, copy, modify,
              distribute, or deploy the software;</li>
            <li>determining whether the project is suitable for your needs.</li>
          </ul>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            The fact that a repository appears on curepo does not mean we endorse
            it, recommend it, certify it, audit it, or guarantee its quality,
            safety, legality, or usefulness.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Any action you take with third-party repositories or software is done
            entirely at your own risk.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            5. Limitation of Liability
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            To the maximum extent permitted by law, curepo, its operator,
            owners, contributors, affiliates, partners, and service providers
            will not be liable for any direct, indirect, incidental,
            consequential, special, punitive, or exemplary damages arising from
            or related to your use of curepo or any third-party repository,
            code, or software found through curepo.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            This includes, without limitation, damages for:
          </p>
          <ul className="list-disc pl-5 mt-4 font-body-md text-body-md text-on-surface-variant space-y-2">
            <li>data loss;</li>
            <li>security breaches;</li>
            <li>malware or viruses;</li>
            <li>corrupted files;</li>
            <li>system failures;</li>
            <li>business interruption;</li>
            <li>lost profits;</li>
            <li>lost revenue;</li>
            <li>loss of goodwill;</li>
            <li>software defects;</li>
            <li>license disputes;</li>
            <li>unauthorized access;</li>
            <li>damage to devices, systems, or networks;</li>
          </ul>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            You agree that your sole and exclusive remedy for dissatisfaction with
            curepo is to stop using the website.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Some jurisdictions do not allow certain limitations of liability, so
            some of the above limitations may not apply to you. In such cases,
            our liability will be limited to the maximum extent permitted by
            applicable law.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            6. External Links
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            curepo contains links to external websites, including GitHub and
            other third-party services.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            We do not control these external websites and are not responsible for
            their content, security, availability, policies, practices, or terms.
            Visiting external websites is your responsibility and is done at your
            own risk.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            You should review the applicable terms, privacy policies, licenses,
            and documentation of any third-party website, repository, or service
            before using it.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            7. Changes to Terms
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We may update, modify, or replace these Terms at any time.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            When we make changes, we may update the “Last updated” date at the
            top of this page. The updated Terms will become effective when
            posted, unless stated otherwise.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Your continued use of curepo after any changes means you accept the
            revised Terms. If you do not agree with the updated Terms, you should
            stop using curepo.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            8. Governing Law
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            These Terms are governed by and interpreted according to the laws of
            [JURISDICTION], without regard to conflict of law principles.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Any disputes arising from or related to these Terms or your use of
            curepo will be handled in the courts or legal forums of
            [JURISDICTION], unless applicable law requires otherwise.
          </p>
        </div>

        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-stack-sm">
            9. Contact
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            If you have questions about these Terms, you can contact us at:
            admin@curepo.dev
          </p>
        </div>
      </div>
    </section>
  );
}
