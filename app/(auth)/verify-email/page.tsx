import { Card } from "@/components/ui/card";
import { signInWithGoogle } from "../_actions";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Card className="w-full max-w-sm mx-auto mt-20 p-6">
        <h1 className="text-2xl font-bold text-center">Verify Email</h1>
        <p className="mt-4 text-center text-sm text-gray-600">
          Please check your email for a verification link.
        </p>
        <p className="mt-4 text-center text-sm text-gray-600">
          If you didn't receive an email,
          <button
            formAction={signInWithGoogle}
            className="text-blue-500 hover:underline"
          >
            click here to resend it
          </button>
        </p>
      </Card>
    </main>
  );
}
