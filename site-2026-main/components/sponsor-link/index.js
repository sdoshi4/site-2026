const TRACKING_CODE = "10545";
const FUND1 = "11331546/Engineering Open House Fund";
const FUND2 = "N1556985/Engineering Open House NRG Fund";
const SKIN_ID = "urbanaannualgiving";

export default function SponsorLink({
    text,
    id,
    giftAmount1,
    nongiftAmount2,
}) {
  return (
    <div>
      <form
        method="POST"
        action={nongiftAmount2 ? "https://payments.uif.uillinois.edu/Gifts/PaymentPageTransferGiftNonGift.aspx" : "https://payments.uif.uillinois.edu/Gifts/PaymentPageTransferGiftNonGift.aspx"}
        id={id}
        target="_blank"
      >
        <input type="hidden" name="TRACKING_CODE" value={TRACKING_CODE} />
        <input type="hidden" name="SKIN_ID" value={SKIN_ID} />
        <input type="hidden" name="FUND1" value={FUND1} />
        <input type="hidden" name="GIFT_AMOUNT1" value={giftAmount1} />
        {nongiftAmount2 && <input type="hidden" name="FUND2" value={FUND2} />}
        {nongiftAmount2 && <input type="hidden" name="NONGIFT_AMOUNT2" value={nongiftAmount2} />}
      </form>
      <button
        className="rounded-none w-full transition divide-y divide-gray-200 overflow-hidden"
        form={id}
        type="submit"
      >
        <div className="mx-auto text-center mb-2 hover:underline hover:font-bold italic">
          {text}
          <p className="italic text-xs">${giftAmount1} may be tax-deductible as allowed by law.</p>
        </div>
      </button>
    </div>
  );
}
