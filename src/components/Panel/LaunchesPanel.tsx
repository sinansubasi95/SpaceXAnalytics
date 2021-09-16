const messages = [
    {
      id: 1,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 2,
      subject: 'Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil',
      sender: 'Virginia Abshire',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 3,
      subject: 'Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus',
      sender: 'Kyle Gulgowski',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 4,
      subject: 'Eos sequi et aut ex impedit',
      sender: 'Hattie Haag',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 5,
      subject: 'Quisquam veniam explicabo',
      sender: 'Wilma Glover',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 6,
      subject: 'Est ratione molestiae modi maiores consequatur eligendi et excepturi magni',
      sender: 'Dolores Morissette',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 7,
      subject: 'Commodi deserunt aut veniam rem ipsam',
      sender: 'Guadalupe Walsh',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 8,
      subject: 'Illo illum aut debitis earum',
      sender: 'Jasmine Hansen',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 9,
      subject: 'Qui dolore iste ut est cumque sed',
      sender: 'Ian Volkman',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
      id: 10,
      subject: 'Aut sed aut illum delectus maiores laboriosam ex',
      sender: 'Rafael Klocko',
      href: '#',
      date: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
];

const LaunchesPanel = () => {
  return (
    <div className="relative flex flex-col h-full bg-gray-100 border-r border-gray-200 w-128">
      <div className="flex-shrink-0">
        <div className="flex flex-col justify-center h-16 px-6 bg-white">
          <div className="flex items-baseline space-x-3">
            <h2 className="text-lg font-medium text-gray-900">Inbox</h2>
            <p className="text-sm font-medium text-gray-500">
              {messages.length} messages
            </p>
          </div>
        </div>
        <div className="px-6 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50">
          Sorted by date
        </div>
      </div>
      <nav aria-label="Message list" className="flex-1 min-h-0 overflow-y-auto">
        <ul className="border-b border-gray-200 divide-y divide-gray-200">
          {messages.map((message) => (
            <li
              key={message.id}
              className="relative px-6 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
              <div className="flex justify-between space-x-3">
                <div className="flex-1 min-w-0">
                  <a href={message.href} className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {message.sender}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {message.subject}
                    </p>
                  </a>
                </div>
                <time
                  dateTime={message.datetime}
                  className="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
                >
                  {message.date}
                </time>
              </div>
              <div className="mt-1">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {message.preview}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LaunchesPanel;
