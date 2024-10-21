import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar bg-neutral-600">
            <div className="flex-1 pl-10">
                <Link href='/' className='text-xl btn btn-ghost hover:text-slate-600 hover:bg-zinc-50 rounded-full text-slate-300'>home.</Link>
            </div>
            <div className="flex-none pr-6">
                <button className="btn btn-square btn-ghost hover:text-slate-600 hover:bg-zinc-50 rounded-full text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
                </button>
            </div>
        </div>
    )
}