import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Lantern 1',
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+1.png',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+2.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Number+100.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Number+138.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 5,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Number+28.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 6,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Number+29.png',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 7,
        title: "Lantern 2",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Number+3+(big).png',
        commentCount: 3,
        shareCount: 2,
      },
      
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+1.png',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+1.png',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+1.png',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        image: 'https://gltfheadstone.s3.amazonaws.com/2D/Lantern+1.png',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-1 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-slate-400 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }: any) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 overflow-y-auto" style={{height: 'calc(100vh - 180px)'}}>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="grid grid-cols-2">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    <img src={post.image} className="w-100" alt={post.title}/>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>
                    <a href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Tabs;