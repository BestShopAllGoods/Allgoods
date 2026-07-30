export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <div className="prose mt-6 text-sm text-muted-foreground">
        <p className="mb-4">
          At AllGoods, we take your privacy seriously. We collect only the
          information necessary to process your orders and provide you with the
          best possible shopping experience.
        </p>
        <p className="mb-4">
          We never sell or share your personal information with third parties.
          Payment information is processed securely through Stripe and is
          never stored on our servers.
        </p>
        <p className="mb-4">
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us at support@allgoods.com.
        </p>
      </div>
    </div>
  );
}
