import { Card } from "@/components/ui/card";
import React from "react";
import { signIn, signInWithGoogle } from "../_actions";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Card className="w-full max-w-sm mx-auto mt-20 p-6">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <button
            formAction={signIn}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Or sign in with Google
          </p>
          <button
            formAction={signInWithGoogle}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mt-2"
          >
            Sign In with Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </Card>
    </main>
  );
}
