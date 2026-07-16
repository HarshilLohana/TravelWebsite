import React from "react";
import PolicyLayout, { PolicySection, P } from "./PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      description="Refund and cancellation policy of Arabian Amenity Travel LLC covering flights, hotels, visas, travel insurance, transfers, and tour activities."
      canonical="https://arabianamenity.com/refund-policy"
      lastUpdated="17 June 2026"
    >
      <PolicySection>
        <P>
          Arabian Amenity Travel LLC ("AAT", "we", "us") arranges travel services including flight
          tickets, hotel accommodation, visa processing, travel insurance, transfers, and tour
          activities on behalf of our corporate clients. Because these services are supplied to us
          by third-party providers (airlines, hotels, insurers, visa authorities, and ground
          operators), refunds and cancellations are governed primarily by the terms of those
          underlying suppliers, in addition to the terms set out below.
        </P>
      </PolicySection>

      <PolicySection heading="General Principles">
        <P>
          All cancellation and amendment requests must be submitted to AAT in writing (email or
          through your account manager). Cancellations take effect only from the date and time we
          receive your written request, not from the date you decide to cancel. Refunds, where due,
          are processed back to the original client account and method of payment.
        </P>
      </PolicySection>

      <PolicySection heading="Flights (Air Tickets)">
        <P>
          Air ticket refunds and changes are subject entirely to the fare rules of the issuing
          airline. Many discounted, promotional, and corporate-negotiated fares are non-refundable
          or carry change and cancellation penalties. Where a refund is permitted by the airline,
          the refundable amount is the fare component recoverable from the airline, less any
          airline cancellation charge, less AAT's service fee, which is non-refundable. Airline
          refunds are released to us according to the airline's own processing timelines and are
          passed to you once received.
        </P>
      </PolicySection>

      <PolicySection heading="Hotel Accommodation">
        <P>
          Hotel cancellations are subject to the cancellation policy attached to each individual
          reservation, which is confirmed to you at the time of booking. Non-refundable and
          advance-purchase rates carry no refund. For flexible rates, cancellation charges apply if
          you cancel after the supplier's free-cancellation deadline, and may amount to one or more
          nights or the full stay.
        </P>
      </PolicySection>

      <PolicySection heading="Visa Services">
        <P>
          Once a visa application has been submitted to the relevant authority, government and
          processing fees are non-refundable, regardless of the outcome of the application. AAT's
          visa service fee is non-refundable once processing has commenced. We do not guarantee the
          approval of any visa, as approval is the sole decision of the issuing authority.
        </P>
      </PolicySection>

      <PolicySection heading="Travel Insurance">
        <P>
          Insurance premiums are generally non-refundable once the policy has been issued, except
          where the insurer's own cooling-off or cancellation terms allow.
        </P>
      </PolicySection>

      <PolicySection heading="Transfers, Tours, and Activities">
        <P>
          These are subject to the cancellation terms of the individual operator. Late
          cancellations and no-shows are typically charged in full.
        </P>
      </PolicySection>

      <PolicySection heading="Service Fees">
        <P>
          AAT's professional service and handling fees are earned upon arranging a booking and are
          non-refundable, even where the underlying service is cancelled or refunded.
        </P>
      </PolicySection>

      <PolicySection heading="Refund Processing Time">
        <P>
          Once a refund is approved and the corresponding funds are received from the supplier, AAT
          processes the refund to the client account. Supplier refund timelines vary and some
          airline or hotel refunds may take several weeks or longer; AAT is not responsible for
          delays caused by suppliers.
        </P>
      </PolicySection>

      <PolicySection heading="No-Shows and Unused Services">
        <P>
          Failure to use any booked service ("no-show") without prior written cancellation is
          non-refundable.
        </P>
      </PolicySection>

      <PolicySection heading="Contact">
        <P>
          For any cancellation or refund request, please contact your account manager or email{" "}
          <a href="mailto:ops@arabianamenity.com" className="text-[#c9a84c] font-semibold hover:underline">
            ops@arabianamenity.com
          </a>.
        </P>
      </PolicySection>
    </PolicyLayout>
  );
}