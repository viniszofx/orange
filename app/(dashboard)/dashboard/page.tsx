import { signOut } from "@/app/(auth)/_actions";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main>
      <Card className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <img
          src={`${data.user?.user_metadata.picture}`}
          alt="image"
          className="h-20 w-20 rounded-full self-center"
        />
        <CardHeader className="text-center text-2xl font-bold">
          Hello, {data?.user?.user_metadata?.full_name || "Guest"}!
        </CardHeader>
        <CardDescription className="text-center text-sm text-muted-foreground">
          This is the dashboard page. You can add your content here.
        </CardDescription>
        <CardFooter className="flex justify-center mt-4">
          <form>
            <button
              formAction={signOut}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Logout
            </button>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}
