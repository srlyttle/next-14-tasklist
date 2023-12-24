import Modal from '@/components/Modal'
import { Priority } from '@/components/Priority'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex w-full  flex-col gap-2 px-8 pt-4 text-gray-400'>
      <section className='flex w-full items-center justify-between py-4'>
        {/* {menuItems.map(({ label, route }) => (
      <Link key={route} href={route}>
        <div className='text-white'> {label}</div>
      </Link>
    ))} */}
        <Image
          className='flex'
          src='/images/sort.png'
          alt='sort icon'
          width={24}
          height={24}
        />
        <div className='text-maintext flex'>Task List</div>

        <Image
          className='flex rounded-full border-2 border-secondary'
          src='/images/photome.jpeg'
          alt='sort icon'
          width={42}
          height={42}
        />
      </section>
      <section className='flex'>
        <label
          htmlFor='task'
          //   className='relative flex w-full items-center text-gray-400 focus-within:text-gray-600'
          className='relative flex w-full items-center  focus-within:text-gray-600'
        >
          <Image
            className='pointer-events-none absolute left-3 h-8 w-8'
            src='/images/search-normal.png'
            alt='sort icon'
            width={34}
            height={34}
            rounded-full
          />
          <input
            type='text'
            placeholder='Search for your task...'
            className='w-full rounded-md border-2 border-secondary bg-transparent py-4 pl-12'
          />
        </label>
      </section>
      <section className='flex'>
        <select className='rounded-md bg-secondary p-[3px]' name='date' id=''>
          <option>today</option>
        </select>
      </section>
      <section className='flex w-full gap-2 rounded-md bg-secondary p-4'>
        <div className='flex items-center'>
          <input
            type='radio'
            className='h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600'
          />
        </div>
        <div className='flex w-full flex-col'>
          <div className='flex text-white text-opacity-90'>
            Do Math Homework
          </div>
          <div className='flex w-full items-center justify-between'>
            <div className='flex text-sm text-zinc-400'>Today At 16:45</div>
            <div className='flex gap-2'>
              <div className='inline-flex h-[29px] w-[87px] items-center justify-center gap-[5px] rounded bg-indigo-400 px-2 py-1'>
                <Image
                  src='/images/mortarboard.png'
                  alt='mortarboard'
                  width={14}
                  height={14}
                  rounded-full
                />
                <div className='text-xs font-normal leading-[21px] text-white'>
                  University
                </div>
              </div>
              <div className='flex h-[29px] w-[42px]  items-center justify-center gap-2 rounded border border-indigo-400 px-2 py-1'>
                <Priority priority={1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
