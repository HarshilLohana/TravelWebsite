import React from "react";
import PolicyLayout, { PolicySection, P } from "./PolicyLayout";

export default function TermsConditions() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      description="Terms and conditions governing the use of Arabian Amenity Travel LLC's website and travel booking services in Dubai, UAE."
      canonical="https://arabianamenity.com/terms-conditions"
      lastUpdated="17 June 2026"
    >
      <PolicySection heading="1. About Us and These Terms">
        <P>
          This website and the services offered through it are operated by Arabian Amenity Travel
          LLC, a company licensed in Dubai, United Arab Emirates (Tax Registration Number
          104070338900003). By accessing this website or placing a booking with us, you agree to
          these Terms & Conditions. If you do not accept them, please do not use our services.
        </P>
      </PolicySection>

      <PolicySection heading="2. Our Role as Agent">
        <P>
          AAT acts as an intermediary travel agent. We arrange and book travel services — including
          flights, hotels, visas, insurance, transfers, and activities — that are provided by
          independent third-party suppliers. Your contract for the actual travel service is with
          the relevant supplier (airline, hotel, insurer, or operator) and is subject to that
          supplier's own terms and conditions. AAT is not the provider of these services and is not
          liable for the acts, omissions, or default of any supplier.
        </P>
      </PolicySection>

      <PolicySection heading="3. Business Clients">
        <P>
          Our services are provided on a business-to-business basis to corporate clients and
          registered partners. By booking with us, you confirm that you are acting in the course of
          business and are authorised to make bookings on behalf of your organisation and its
          travellers.
        </P>
      </PolicySection>

      <PolicySection heading="4. Bookings and Confirmation">
        <P>
          A booking is confirmed only when we issue a written confirmation and/or the relevant
          ticket, voucher, or reservation. You are responsible for checking all details on your
          confirmation — names, dates, routings, and traveller information — immediately and
          notifying us of any error. Names on tickets must match the traveller's passport exactly;
          corrections after issue may be impossible or chargeable.
        </P>
      </PolicySection>

      <PolicySection heading="5. Prices and Payment">
        <P>
          Prices are subject to availability and may change until a booking is confirmed and paid.
          Prices quoted may be affected by currency fluctuations, supplier price changes, taxes,
          and surcharges outside our control. Payment terms are as agreed in your account or credit
          arrangement with AAT. We reserve the right to cancel unconfirmed or unpaid bookings.
        </P>
      </PolicySection>

      <PolicySection heading="6. Taxes">
        <P>
          Applicable taxes, including UAE Value Added Tax (VAT) where chargeable, are applied in
          accordance with UAE law and shown on our tax invoices.
        </P>
      </PolicySection>

      <PolicySection heading="7. Passports, Visas, and Travel Documents">
        <P>
          It is the responsibility of the client and each traveller to hold valid passports, visas,
          permits, and health documentation required for their journey. We can assist with visa
          processing, but the grant of any visa is at the sole discretion of the relevant
          authority, and AAT accepts no liability for refused entry, denied visas, or any resulting
          loss.
        </P>
      </PolicySection>

      <PolicySection heading="8. Health and Travel Advisories">
        <P>
          Travellers are responsible for ensuring they meet all health, vaccination, and entry
          requirements for their destinations. We recommend consulting the relevant authorities and
          a medical professional before travel.
        </P>
      </PolicySection>

      <PolicySection heading="9. Insurance">
        <P>
          We strongly recommend that all travellers hold comprehensive travel insurance appropriate
          to their trip. Where insurance is not arranged through us, the traveller bears all risk
          of uninsured loss.
        </P>
      </PolicySection>

      <PolicySection heading="10. Changes and Cancellations">
        <P>
          Changes and cancellations are governed by our Refund & Cancellation Policy and by the
          terms of the relevant suppliers.
        </P>
      </PolicySection>

      <PolicySection heading="11. Liability">
        <P>
          To the maximum extent permitted by law, AAT's total liability arising from any booking is
          limited to the value of our service fee for that booking. We are not liable for indirect,
          consequential, or special losses, or for any loss arising from circumstances beyond our
          reasonable control (including airline schedule changes, delays, strikes, weather, force
          majeure, or supplier insolvency).
        </P>
      </PolicySection>

      <PolicySection heading="12. Intellectual Property">
        <P>
          All content on this website is owned by or licensed to AAT and may not be reproduced
          without permission.
        </P>
      </PolicySection>

      <PolicySection heading="13. Governing Law and Jurisdiction">
        <P>
          These Terms & Conditions are governed by the laws of the Emirate of Dubai and the federal
          laws of the United Arab Emirates. Any dispute is subject to the exclusive jurisdiction of
          the courts of Dubai.
        </P>
      </PolicySection>

      <PolicySection heading="14. Contact">
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