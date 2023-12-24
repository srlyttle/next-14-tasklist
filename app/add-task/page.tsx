import { Priority } from '@/components/Priority'
import Image from 'next/image'
import { headers } from 'next/headers'

export default function AddTask() {
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
        <div className='text-maintext flex'>Add new task</div>

        <Image
          className='flex rounded-full border-2 border-secondary'
          src='/images/photome.jpeg'
          alt='sort icon'
          width={42}
          height={42}
        />
      </section>
      <section>
        <form>
          <div className='flex flex-col'>
            <div className='flex'>
              <input
                type='text'
                placeholder='Add your task...'
                className='w-full rounded-md border-2 border-secondary bg-transparent p-4'
              />
            </div>
            <div className='flex w-full'>
              <ul className='flex w-full list-none items-center rounded-lg bg-transparent text-sm font-medium text-gray-900 sm:flex dark:border-gray-600 dark:bg-gray-700 dark:text-white'>
                <>
                  {Array.from(Array(5).keys()).map((n) => (
                    <li
                      key={n}
                      className='flex w-full  border-gray-200   dark:border-gray-600'
                    >
                      <div className='flex w-full flex-1'>
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='p-4 font-medium text-gray-900 dark:text-gray-300'
                        >
                          <Priority priority={n + 1} />
                        </label>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value={n + 1}
                          name='list-radio'
                          className=' border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700'
                        />
                      </div>
                    </li>
                  ))}
                </>
              </ul>
            </div>

            <div className='mt-4 flex w-full'>
              <button className='flex h-12 w-full items-center justify-center rounded-md bg-primary text-white'>
                Create Task
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
