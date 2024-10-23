import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import {
  MdOutlineMenu,
  MdArrowOutward,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <>
    <nav className='sticky h-auto p-2 inset-x-0 top-0 z-30 w-full bg-slate-200/40 backdrop-blur-lg drop-shadow-lg transition-all'>
        <MaxWidthWrapper>
            <div className="items-center justify-center max-w-[1200px] w-full mx-auto px-4">
            <div className="flex text-black justify-between items-center">
          {/* Logo */}
          <Link href='/' className="flex gap-2 justify-center items-center">
            <img
              src="/textify(Black).png"
              alt="Logo Black"
              className="w-[2rem] h-auto"
            />
            <span className="hidden md:block">Textify</span>
          </Link>

          {/* Right Section - Avatar */}
          <div className='flex gap-2'>
          <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'lg',
                  })}>
                  Pricing
                </Link>
                <Link
                  href='/sign-in'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'lg',
                  })}>
                  Sign-in
                </Link>
                <Link
                  href='/sign-up'
                  className={buttonVariants({
                    size: 'lg',
                  })}>
                  Get Started
                </Link>
              </>
            </div>
          </div>
        </div>
        </MaxWidthWrapper>
    </nav>
      <MaxWidthWrapper className="mb-6 mt-10 sm:mt-20 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Textify is now public!
          </p>
        </div>
        <h1 className="max-w-6xl text-4xl font-regular md:text-5xl lg:text-[53.94px] sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-1.0788px] lg:leading-[59.334px] font-soehne">
          Instant Conversations with Your Documents—Upload, Ask, and Discover
          Answers Effortlessly
        </h1>

        <div className="flex gap-6 md:gap-10 mt-5">
          <Link
            href="/sign-up"
          >
            <Button className="bg-slate-900  text-white px-6 py-4 flex items-center justify-center hover:bg-slate-800 hover:text-white">
              Get Started <MdArrowOutward className="ml-3" />
            </Button>
          </Link>

          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "bg-white  text-slate-900 px-6 py-4 flex items-center justify-center hover:bg-white hover:underline",
            })}
            href="/premium"
            target="_blank"
          >
            Try Premium <MdOutlineArrowForwardIos className="ml-3" />
          </Link>
        </div>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-100 to-zinc-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-[26.97px] md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[34px] tracking-[-0.3px] leading-[22px] mt-10">
                Textify empowers you to effortlessly extract insights from your
                documents, enabling precise answers to your questions with
                unmatched clarity and speed, thanks to its advanced AI-driven
                capabilities.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-100 to-zinc-400 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-20 max-w-5xl lg:mt-40">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-soehne text-4xl text-gray-900 sm:text-5xl">
              Get started with instant document chats!
            </h2>
            <p className="mt-4 text-lg text-gray-600 md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[34px] tracking-[-0.3px] leading-[22px] font-soehne">
              Textify redefines how you chat with your PDF files—easy and
              intuitiv.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 sm:px-12 md:px-10">
          <li className="md:flex-1">
            <div
              className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-7 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 
            bg-stone-50  ml-5 rounded-lg md:bg-transparent md:rounded-none "
            >
              <span className="text-sm font-medium text-zinc-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700 font-soehne tracking-[-0.1px] leading-5 max-w-xs md:max-w-full">
                Begin with a free plan or select our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan{" "}
                </Link>
                for enhanced features!.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div
              className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-7 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 
                bg-stone-50  ml-5 rounded-lg md:bg-transparent md:rounded-none"
            >
              <span className="text-sm font-medium text-zinc-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 text-zinc-700 font-soehne tracking-[-0.1px] leading-5 max-w-xs md:max-w-full">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div
              className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-7 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 
            bg-stone-50  ml-5 rounded-lg md:bg-transparent md:rounded-none"
            >
              <span className="text-sm font-medium text-zinc-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 text-zinc-700 font-soehne tracking-[-0.1px] leading-5 max-w-xs md:max-w-full">
                It&apos;s that simple. Try out Textify today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-100 to-zinc-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/file-upload-preview.jpg"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
