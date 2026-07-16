import React from "react";
import PolicyLayout, { PolicySection, P } from "./PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="Privacy policy of Arabian Amenity Travel LLC explaining how we collect, use, and protect personal data under UAE PDPL regulations."
      canonical="https://arabianamenity.com/privacy-policy"
      lastUpdated="17 June 2026"
    >
      <PolicySection>
        <P>
          Arabian Amenity Travel LLC ("AAT", "we", "us") is committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, store, and protect personal data
          in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal
          Data (the "PDPL") and other applicable UAE regulations.
        </P>
      </PolicySection>

      <PolicySection heading="1. Who We Are">
        <P>
          AAT is a travel agency licensed in Dubai, UAE (TRN 104070338900003), acting as data
          controller in respect of the personal data we process. For privacy queries, contact us at{" "}
          <a href="mailto:ops@arabianamenity.com" className="text-[#c9a84c] font-semibold hover:underline">
            ops@arabianamenity.com
          </a>.
        </P>
      </PolicySection>

      <PolicySection heading="2. Information We Collect">
        <P>
          We collect personal data necessary to provide travel services, including: names, dates of
          birth, passport and visa details, nationality, contact details (email, phone, address),
          traveller and emergency contact information, payment and billing details, travel
          preferences, and booking history. For corporate clients, we also process the contact and
          authorisation details of your staff and travellers. When you use our website, we may
          collect technical data such as IP address, browser type, and pages visited.
        </P>
      </PolicySection>

      <PolicySection heading="3. How We Use Your Data">
        <P>
          We process personal data to: arrange and manage bookings (flights, hotels, visas,
          insurance, transfers, activities); communicate with you about bookings and services;
          process payments and issue invoices; comply with legal, tax, and regulatory obligations;
          and improve our services. We process this data on the lawful bases permitted under the
          PDPL, including performance of a contract, compliance with legal obligations, and your
          consent where required.
        </P>
      </PolicySection>

      <PolicySection heading="4. Sharing Your Data">
        <P>
          To deliver your travel services, we share personal data with relevant third parties,
          including airlines, hotels, insurers, visa and government authorities, ground operators,
          payment processors, and global distribution systems. These parties may be located outside
          the UAE. We share only the data necessary to fulfil your booking, and we require
          recipients to handle data appropriately. We may also disclose data where required by law
          or competent authorities.
        </P>
      </PolicySection>

      <PolicySection heading="5. International Transfers">
        <P>
          Because travel is global, your data may be transferred to and processed in countries
          outside the UAE. Where we transfer personal data internationally, we take steps to ensure
          it is protected in accordance with the PDPL.
        </P>
      </PolicySection>

      <PolicySection heading="6. Data Retention">
        <P>
          We retain personal data for as long as necessary to provide our services and to meet
          legal, accounting, and tax record-keeping requirements under UAE law, after which it is
          securely deleted or anonymised.
        </P>
      </PolicySection>

      <PolicySection heading="7. Data Security">
        <P>
          We apply appropriate technical and organisational measures to protect personal data
          against unauthorised access, loss, or misuse.
        </P>
      </PolicySection>

      <PolicySection heading="8. Your Rights">
        <P>
          Subject to the PDPL, you have the right to access your personal data, request correction
          or deletion, restrict or object to certain processing, withdraw consent, and request that
          your data be transferred. To exercise these rights, contact us at{" "}
          <a href="mailto:ops@arabianamenity.com" className="text-[#c9a84c] font-semibold hover:underline">
            ops@arabianamenity.com
          </a>. We will respond in accordance with applicable law.
        </P>
      </PolicySection>

      <PolicySection heading="9. Cookies">
        <P>
          Our website may use cookies and similar technologies to operate the site and analyse
          usage. You can manage cookie preferences through your browser settings.
        </P>
      </PolicySection>

      <PolicySection heading="10. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. The current version will always be
          posted on our website with the "last updated" date.
        </P>
      </PolicySection>

      <PolicySection heading="11. Contact">
        <P>
          Arabian Amenity Travel LLC, Office 400-8, 4th Floor, Fahidi Heights Office Tower, Bur
          Dubai, Dubai, UAE.
        </P>
        <P>
          Email:{" "}
          <a href="mailto:ops@arabianamenity.com" className="text-[#c9a84c] font-semibold hover:underline">
            ops@arabianamenity.com
          </a>{" "}
          · Phone:{" "}
          <a href="tel:+971566857588" className="text-[#c9a84c] font-semibold hover:underline">
            +971 56 685 7588
          </a>
        </P>
      </PolicySection>
    </PolicyLayout>
  );
}