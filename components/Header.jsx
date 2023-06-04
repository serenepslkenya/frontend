import Link from "next/link";

export default function Header({ active }) {
  return (
    <div>
      <header class="fixed top-0 z-30 w-full  bg-white   ">
        <div className="bg-red-700 w-full flex flex-row-reverse px-2">
          <span class="text-white ">Call us : 0740 650 480</span>
        </div>
        <div class="flex items-center justify-between w-full px-8 ">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="h-[80px]" />
          </a>
          <div class="flex items-center space-x-1">
            <ul class="hidden space-x-2 md:inline-flex">
              <li>
                <Link
                  href="/"
                  class={
                    active == "home"
                      ? "px-4 py-2 font-semibold text-red-500 rounded"
                      : "px-4 py-2 font-semibold text-gray-500 rounded"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class={
                    active == "services"
                      ? "px-4 py-2 font-semibold text-red-500 rounded"
                      : "px-4 py-2 font-semibold text-gray-500 rounded"
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  class={
                    active == "products"
                      ? "px-4 py-2 font-semibold text-red-500 rounded"
                      : "px-4 py-2 font-semibold text-gray-500 rounded"
                  }
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  class={
                    active == "training"
                      ? "px-4 py-2 font-semibold text-red-500 rounded"
                      : "px-4 py-2 font-semibold text-gray-500 rounded"
                  }
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  class="px-4 py-2 font-semibold text-gray-500 rounded"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div class="inline-flex md:hidden">
              <button class="flex-none px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span class="sr-only">Open Menu</span>
              </button>
              {/* Put list item */}

              {/* <div>
                <ul>
                  <li>hey</li>
                  <li>there</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <div class="h-[120px]" />
    </div>
  );
}
