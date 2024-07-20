import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";

import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2 ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-7xl ">
                  Ultimate AI Content Generator
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform offers a suite of powerful tools to help you
                  generate social media contents with the power of AI.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-24 items-center justify-center text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground"></div>
                  <div>
                    <h3 className="text-lg font-bold">Increased Efficiency</h3>
                    <p className="text-muted-foreground">
                      Automate your workflows and streamline your processes for
                      maximum productivity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground"></div>
                  <div>
                    <h3 className="text-lg font-bold">Accelerated Growth</h3>
                    <p className="text-muted-foreground">
                      Leverage our cutting-edge tools to drive innovation and
                      scale your contents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground"></div>
                  <div>
                    <h3 className="text-lg font-bold">AI Powered</h3>
                    <p className="text-muted-foreground">
                      Use our AI to generate contents on the go by simple
                      suggestions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
