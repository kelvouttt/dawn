import Link from 'next/link'
import { UserButton } from '@stackframe/stack'

export default function Navbar() {
    return (
        <div className="navbar bg-neutral-600">
            <div className="flex-1 pl-10">
                <Link href='/' className='text-xl btn btn-ghost hover:text-slate-600 hover:bg-zinc-50 rounded-full text-slate-300'>home.</Link>
            </div>
            <div className="flex-none pr-6">
                <UserButton />
            </div>
        </div>
    )
}