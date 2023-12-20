const blogs = [
  {
    id: 1,
    img: '../public/images/blog-posts/iphoneStocks.png',
    author: 'ლილე კვარაცხელია',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['market', 'application', 'ai'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 2,
    img: 'public/images/blog-posts/tennisBalls.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 3,
    img: 'public/images/blog-posts/iphoneWeather.png',
    author: 'ნია გოგსაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['figma', 'uiux'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 4,
    img: 'public/images/blog-posts/planning.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 5,
    img: 'public/images/blog-posts/iphoneWeather.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 6,
    img: 'public/images/blog-posts/planning.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 7,
    img: 'public/images/blog-posts/iphoneWeather.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 8,
    img: 'public/images/blog-posts/iphoneWeather.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['figma', 'uiux'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 9,
    img: 'public/images/blog-posts/mountains.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['market', 'application', 'ai'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 10,
    img: 'public/images/blog-posts/tennisBalls.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
  {
    id: 11,
    img: 'public/images/blog-posts/tennisBalls.png',
    author: 'ტატო სამხარაძე',
    date: '02.11.2023',
    title: 'EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა',
    category: ['uiux', 'research'],
    desc: '6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი...',
  },
];
export default blogs;