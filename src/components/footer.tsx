
export default function StaticFooter() {
  return (
      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a className="hover:underline">© 2023 Matt Vogel </a>
        </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a className="mr-4 hover:underline md:mr-6" href="/contact">Contact</a>
        </li>
        <li>
          <a className="mr-4 hover:underline md:mr-6" href="/blog">Blog</a>
        </li>
        <li>
          <a className="mr-4 hover:underline md:mr-6" href="https://github.com/mattvogel">Github</a>
        </li>
      </ul>
      </div>
    </footer>
  )
}