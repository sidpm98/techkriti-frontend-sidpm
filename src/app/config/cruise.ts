export const cruise = {
  about:
    `Technocruise is the pre-festival Zonal round event of Techkriti which comprises
    of Preliminary rounds of some major competitions and professional technical workshops
    to enhance the learning of students and to encourage the zeal of the participants.
    Technocruise covers all major cities of India and thus spans the entire height and
    width of the nation. Last year we witnessed a participation of over 8000 in workshops
    and events from nearly 250 colleges all over India`,

  workshopName:
    [
      {
        name: 'Ethical Hacking',
        pic: '/assets/testImage.jpg'
      },
      {
        name: 'Internet Of Things',
        pic: '/assets/testImage.jpg'
      },
      {
        name: 'Android App Development',
        pic: '/assets/testImage.jpg'
      },
      {
        name: 'Data Analytics',
        pic: '/assets/testImage.jpg'
      }
    ],
  contacts: [{
    name: 'Zonal Managers',
    content: [
      {
        name: 'Bhanu Mahto',
        phn: 8789772505,
        pic: '/assets/contacts/bhanu_mahto.jpg'
      },
      {
        name: 'Punit Meena',
        phn: 9628559109,
        pic: '/assets/contacts/punit_meena.jpg'
      },
      {
        name: 'SP Ranjan',
        phn: 7054151304,
        pic: '/assets/contacts/sp_ranjan.jpg'
      }
    ]
  },
    {
      name: 'Head Events',
      content: [
        {
          name: 'Rahul Kumar',
          phn: 7755047978,
          email: 'rahulk@techkriti.org',
          tel: '0512-679-4817',
          pic: '/assets/contacts/rahul_kumar.jpg'
        },
        {
          name: 'Naveen Kumar',
          phn: 7755047937,
          email: 'naveen@techkriti.org',
          tel: '0512-679-4813',
          pic: '/assets/contacts/naveen_kumar.jpg'
        },
        {
          name: 'Rama Krishna',
          phn: 8960622585,
          email: 'rama@techkriti.org',
          tel: '0512-679-4817',
          pic: '/assets/contacts/rama_krishna.jpg'
        }]
    }
  ],

  cities: [
    {
      name: 'Dehradun',
      date: '2-3 September',
      pic: '',
      row: 1
    },
    {
      name: 'Raipur',
      date: 'Coming Soon',
      pic: '',
      row: 1
    },
    {
      name: 'Hyderabad',
      date: 'Coming Soon',
      pic: '',
      row: 1
    },
    {
      name: 'Allahabad',
      date: 'Coming Soon',
      pic: '',
      row: 1
    },
    {
      name: 'Indore',
      date: 'Coming Soon',
      pic: '',
      row: 2
    },
    {
      name: 'Jabalpur',
      date: 'Coming Soon',
      pic: '',
      row: 2
    },
    {
      name: 'Jodhpur',
      date: 'Coming Soon',
      pic: '',
      row: 2
    },
    {
      name: 'Mathura',
      date: 'Coming Soon',
      pic: '',
      row: 3
    },
    {
      name: 'Bareilly',
      date: 'Coming Soon',
      pic: '',
      row: 3
    },
    {
      name: 'Patna',
      date: 'Coming Soon',
      pic: '',
      row: 3
    },
    {
      name: 'Gorakhpur',
      date: 'Coming Soon',
      pic: '',
      row: 3
    }
  ],

  tabs: [
    {
      name: 'home',
      description: 'desc'
    },
    {
      name: 'content',
      description: 'desc'
    },
    {
      name: 'benefits',
      description: 'desc'
    },
    {
      name: 'register',
      description: 'desc'
    },
    {
      name: 'cities',
      description: 'desc'
    }
  ],
  workshops: new Map([
    ['Ethical Hacking',
      {
        'id': 'ethical-hacking',
        'home': `This workshop is specifically designed to provide the right knowledge to the
        'aspiring Cyber Forensics & Ethical Hacking enthusiasts. This workshop will
        'explore the various means that an intruder has available to gain access to computer
        'resources. It will investigate weaknesses of cyber security systems by discussing the
        'theoretical background behind it, and whenever possible, actually performing the attacks.
        `,
        'name': 'Ethical Hacking',
        'content': '',
        'benefits': 'Certificate of Participation for each participant from Techkriti, IIT Kanpur.',
        'cities': ''
      }],
    ['Android App Development',
      {
        'id': 'android-app-dev',
        'home': `Android is an open-source software stack for mobile devices that include an operating system,
           middleware and key applications. Android's mobile operating system is based upon a modified version of the Linux
           kernel. The Android Open Source Project (AOSP) is tasked with the maintenance and further development of Android.
           It's open-source software stack consisting of Java applications running on a Java-based, object-oriented application
           framework on the top of Java core libraries; running on a Dalvik virtual machine featuring JIT compilation.
           **Please bring your Laptops for the Workshop**`,
        'name': 'Android App Development',
        'content': '',
        'benefits': 'Certificate of Participation for each participant from Techkriti, IIT Kanpur.',
        'cities': ''
      }
    ],
    ['Internet Of Things',
      {
        'id': 'internet-of-things',
        'home': `The number of Internet-connected devices (12.5 billion) surpassed the number of human beings (7 billion) on
           the planet in 2011, and by 2020, Internet-connected devices are expected to number between 26 billion and 50 billion
            globally. Internet of Things will drive new consumer and business behavior that will demand increasingly intelligent
             industry solutions, which, in turn, will drive trillions of dollars in opportunity for IT industry and even more for
              the companies that take advantage of the IoT.This Workshop helps to get you ready for the future.
           **Please bring your Laptops for the Workshop**
           ####"The Internet of Things isn't a concept. It's a network; true technology based Network of all networks."-Edewede Oriwoh`,
        'name': 'Internet Of Things',
        'content': '',
        'benefits': 'Certificate of Participation for each participant from Techkriti, IIT Kanpur.',
        'cities': ''
      }
    ]

  ])
};
