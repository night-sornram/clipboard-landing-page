import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className=" w-full h-screen bg-header-mobile md:bg-header-desktop bg-no-repeat bg-contain bg-top flex flex-col">
      <div className=" px-6 xl:px-0 md:px-40 space-y-10 flex flex-col mt-40 w-full justify-center items-center">
        <div>
          <Image
          src={"images/logo.svg"}
          width={125}
          height={125}
          alt="logo"/>
        </div>
        <div className=" text-center flex-col space-y-5 flex justify-center items-center">
          <div className=" text-center text-4xl md:text-5xl font-bold text-custom-300">
            A history of everything you copy
          </div>
          <div className="xl:px-40 text-custom-400">
            Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
          </div>
        </div>
        <div className=" flex md:flex-row w-full justify-center md:space-y-0 space-y-10 flex-col md:space-x-5">
          <button className=" md:w-auto w-full py-3 px-5 shadow-[0_10px_60px_-15px_rgba(38,186,164,1)] shadow-custom-100 bg-custom-100 rounded-full text-white">
            Download for IOS
          </button>
          <button className="md:w-auto w-full py-3 px-5 shadow-[0_10px_60px_-15px_rgba(97,115,255,1)] bg-custom-200 rounded-full text-white">
            Download for Mac
          </button>
        </div>
      </div>
      <div className=" px-6 md:px-40 space-y-10 flex flex-col mt-40 w-full justify-center items-center">
        <div className=" text-center flex-col space-y-5 flex justify-center items-center">
          <div className=" text-center text-3xl font-bold text-custom-300">
            Keep track of your snippets
          </div>
          <div className="xl:px-40 text-custom-400">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</div>
          </div>
      </div>
      <div className= " mt-20 w-full flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 flex justify-center items-center">
          <Image
          src={"/images/image-computer.png"}
          width={752}
          height={572}
          className=" md:px-0 px-10"
          alt="computer"/>
        </div>
        <div className="p-10 md:w-1/2 w-full  space-y-7 flex flex-col justify-center items-start">
          <div className=" w-full text-center md:text-start flex flex-col">
            <div className=" text-xl text-custom-300 font-bold">
              Quick Search
            </div>
            <div className=" text-custom-400">
              Easily search your snippets by content, category, web address, application, and more.
            </div>
          </div>
          <div className=" w-full text-center md:text-start  flex flex-col">
            <div className=" text-xl text-custom-300 font-bold">
              iCloud Sync
            </div>
            <div className=" text-custom-400">
              Instantly saves and syncs snippets across all your devices.
            </div>
          </div>
          <div className=" w-full text-center md:text-start  flex flex-col">
            <div className=" text-xl text-custom-300 font-bold">
              Complete History
            </div>
            <div className=" text-custom-400">
              Retrieve any snippets from the first moment you started using the app.
            </div>
          </div>
        </div>
      </div>
      <div className=" px-6 md:px-40 space-y-10 flex flex-col mt-20 w-full justify-center items-center">
        <div className=" text-center flex-col space-y-5 flex justify-center items-center">
          <div className=" text-center text-3xl font-bold text-custom-300">
          Access Clipboard anywhere
          </div>
          <div className="xl:px-40 text-custom-400">
            Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
          </div>
        </div>
      </div>
      <div className=" px-20 w-full mt-20 flex justify-center items-center">
        <Image
        src={"/images/image-devices.png"}
        width={905}
        height={575}
        alt="devices"/>
      </div>
      <div className=" md:px-40 space-y-10 flex flex-col mt-20 w-full justify-center items-center">
        <div className=" text-center flex-col space-y-5 flex justify-center items-center">
          <div className=" text-center text-3xl font-bold text-custom-300">
            Supercharge your workflow
          </div>
          <div className="xl:px-40 text-custom-400">
            We’ve got the tools to boost your productivity.
          </div>
        </div>
      </div>
      <div className=" mt-20 w-full flex-col md:flex-row flex space-y-5 md:space-y-0  md:space-x-5 px-6 md:px-10 lg:px-20 xl:px-40">
        <div className=" w-full md:w-1/3 flex-col flex justify-center items-center space-y-5">
          <Image
          src={"/images/icon-blacklist.svg"}
          width={44}
          height={40}
          alt="blacklist"/>
          <div className=" text-center text-custom-300 font-bold text-xl lg:text-2xl">
            Create blacklists
          </div>
          <div className=" text-center text-custom-400 text-sm lg:text-base">
            Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
          </div>
        </div>
        <div className=" w-full md:w-1/3 flex-col flex justify-center items-center space-y-5">
          <Image
          src={"/images/icon-text.svg"}
          width={44}
          height={40}
          alt="text"/>
          <div className=" text-center text-custom-300 font-bold text-xl lg:text-2xl">
            Plain text snippets
          </div>
          <div className=" text-center text-custom-400 text-sm lg:text-base">
            Remove unwanted formatting from copied text for a consistent look. 
          </div>
        </div>
        <div className=" w-full md:w-1/3 flex-col flex justify-center items-center space-y-5">
          <Image
          src={"/images/icon-preview.svg"}
          width={44}
          height={40}
          alt="preview"/>
          <div className=" text-center text-custom-300 font-bold text-xl lg:text-2xl">
            Sneak preview
          </div>
          <div className=" text-center text-custom-400 text-sm lg:text-base">
            Quick preview of all snippets on your Clipboard for easy access.
          </div>
        </div>
      </div>
      <div className=" mt-40 w-full  flex-col md:flex-row flex justify-center items-center md:justify-evenly space-y-16 md:space-y-0   md:space-x-16 px-6 md:px-10 lg:px-20 xl:px-40">
        <div>
          <Image
          src={"/images/logo-google.png"}
          width={165}
          height={49}
          alt="google"/>
        </div>
        <div>
          <Image
          src={"/images/logo-ibm.png"}
          width={139}
          height={51}
          alt="ibm"/>
        </div>
        <div>
          <Image
          src={"/images/logo-microsoft.png"}
          width={161}
          height={35}
          alt="microsoft"/>
        </div>
        <div>
          <Image
          src={"/images/logo-hp.png"}
          width={135}
          height={56}
          alt="hp"/>
        </div>
        <div>
          <Image
          src={"/images/logo-vector-graphics.png"}
          width={125}
          height={30}
          alt="vector"/>
        </div>
      </div>
      <div className=" px-6 xl:px-0 md:px-40 space-y-10 flex flex-col mt-40 pb-40 w-full justify-center items-center">
        <div className=" text-center flex-col space-y-5 flex justify-center items-center">
          <div className=" text-center text-3xl font-bold text-custom-300">
            Clipboard for iOS and Mac OS
          </div>
          <div className="xl:px-40 text-custom-400">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.
          </div>
        </div>
        <div className=" flex md:flex-row w-full justify-center md:space-y-0 space-y-10 flex-col md:space-x-5">
          <button className=" md:w-auto w-full py-3 px-5 shadow-[0_10px_60px_-15px_rgba(38,186,164,1)] shadow-custom-100 bg-custom-100 rounded-full text-white">
            Download for IOS
          </button>
          <button className="md:w-auto w-full py-3 px-5 shadow-[0_10px_60px_-15px_rgba(97,115,255,1)] bg-custom-200 rounded-full text-white">
            Download for Mac
          </button>
        </div>
      </div>
      <div className=" w-full xl:px-40 lg:px-20 md:px-10 py-10 bg-custom-400 bg-opacity-20 flex flex-col md:flex-row md:justify-between ">
        <div className=" space-y-5 md:space-y-0 text-custom-300 flex flex-col md:flex-row md:space-x-10 lg:space-x-20">
          <div className=" flex justify-center items-center">
            <Image
            src={"images/logo.svg"}
            width={125}
            height={125}
            className=" w-10 h-10"
            alt="logo"/>
          </div>
          <div className=" text-center md:text-start space-y-5 flex flex-col">
            <Link href={"/"}>
              FAQs
            </Link>
            <Link href={"/"}>
              Contact Us
            </Link>
          </div>
          <div className="text-center md:text-start space-y-5 flex flex-col">
            <Link href={"/"}>
              Privacy Policy
            </Link>
            <Link href={"/"}>
              Press kit
            </Link>
          </div>
          <div className="text-center md:text-start space-y-5 flex flex-col">
            <Link href={"/"}>
              Install Guide
            </Link>

          </div>
        </div>
        <div className=" mt-10 md:mt-0 flex justify-center items-center flex-row space-x-5"> 
          <Link href={"/"}>
            <Image
            src={"/images/icon-facebook.svg"}
            width={24}
            height={24}
            alt="facebook"/>
          </Link>
          <Link href={"/"}>
            <Image
            src={"/images/icon-twitter.svg"}
            width={24}
            height={24}
            alt="twitter"/>
          </Link>
          <Link href={"/"}>
            <Image
            src={"/images/icon-instagram.svg"}
            width={24}
            height={24}
            alt="instagram"/>
          </Link>
        </div>
      </div>
      

    </div>
  )}
    