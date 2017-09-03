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
        pic: '/assets/Technocruise/workshops/ethical.jpg'
      },
      {
        name: 'Internet of Things',
        pic: '/assets/Technocruise/workshops/iot.jpg'
      },
      {
        name: 'Android App Development',
        pic: '/assets/Technocruise/workshops/android.jpg'
      },
      {
        name: 'Data Analytics',
        pic: '/assets/Technocruise/workshops/data.jpg'
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
      },
      {
        name: 'Sandeep Akode',
        phn: 9151619485,
        pic: '/assets/contacts/sandeep_akode.jpg'
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
      name: 'dehradun',
      date: '2-3',
      month: 'September',
      eventcode: 'technocruise-dehradun-443331',
      pic: '',
      workshop:
        ['Ethical Hacking', 'Android App Development'],
      row: 1
    },
    {
      name: 'raipur',
      date: '9-10',
      month: 'September',
      eventcode: '',
      pic: '',
      workshop: ['Ethical Hacking', 'Internet of Things'],
      row: 1
    },
    {
      name: 'hyderabad',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 1
    },
    {
      name: 'allahabad',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 1
    },
    {
      name: 'indore',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'jabalpur',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'chandigarh',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'agra',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 3
    },
    {
      name: 'chennai',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 3
    },
    {
      name: 'patna',
      date: '',
      month: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      row: 4
    }
    // {
    //   name: 'gorakhpur',
    //   date: 'Coming Soon',
    //   eventcode: 'technocruise-raipur-213040',
    //   pic: '',
    //   row: 3
    // }
  ],

  sponsers: [
    {
      name: '',
      url: 'http://hicube.in',
      pic: '/assets/Technocruise/sponsers/hicube_Logo.png',
      scale: '20'
    },
    {
      name: '',
      url: 'http://cryptus.in',
      pic: '/assets/Technocruise/sponsers/cryptus_cyber.png',
      scale: '35'
    },
    {
      name: '',
      url: 'http://acharyaji.in',
      pic: '/assets/Technocruise/sponsers/Acharyaji_logo.png',
      scale: '10'
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
      name: 'cities',
      description: 'desc'
    }
  ],
  workshops: new Map([
    ['Ethical Hacking',
      {
        'id': 'ethical-hacking',
        'home': `This module is designed to give an introduction to the fundamentals of internet and its primary
concepts from origin to the current trending concepts of information security world.
We will complete knowledge of basic security concepts, principles, and the key terms associated.With information security and cyber World.
trends as well as threats and modus operandi of cyber criminals and testers.

\*
**Please bring your laptop for the workshop**
`,
        'name': 'Ethical Hacking',
        'content': `
Content to be covered in the workshop
* Networking Fundamentals
* Open Source Intelligence
* Network Attacks
* Malware: Attacks & Detection
* Web Application Attacks
* Cyber Crime
`,
        'benefits': `
* A great headstart to pursue your interest in the field of cyber security.
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': `
* Dehradun
* Raipur
* And more ...
`
      }],
    ['Android App Development',
      {
        'id': 'android-app-dev',
        'home': `
Android is an open-source software stack for mobile devices that include an operating system,
middleware and key applications. Android's mobile operating system is based upon a modified version of the Linux
kernel. The Android Open Source Project (AOSP) is tasked with the maintenance and further development of Android.
It's open-source software stack consisting of Java applications running on a Java-based, object-oriented application
framework on the top of Java core libraries; running on a Dalvik virtual machine featuring JIT compilation.

\*
**Please bring your laptop for the workshop and pre-install sofware kit from the following links:  **

* https://developer.android.com/studio/index.html
* https://developer.android.com/studio/install.html
* http://www.javaworld.com/article/3095406/android/android-studio-for-beginners-part-1-installation-and-setup.html

`,
        'name': 'Android App Development',
        'content': `
Content to be covered in the workshop
* Basics of Android
* Importance and scope
* Android Architecture
* Android Stack
* Android Applications Structure
* Android Emulator
* Android SDK
* Overview of Android Studio
* Android and File Structure
* Android Virtual Device Manager
* DDMS
* LogCat

`,
        'benefits': `
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': `
* Dehradun
* And more ...
`
      }
    ],
    ['Internet of Things',
      {
        'id': 'internet-of-things',
        'home': `
The number of Internet-connected devices (12.5 billion) surpassed the number of human beings (7 billion) on
the planet in 2011, and by 2020, Internet-connected devices are expected to number between 26 billion and 50 billion
globally. Internet of Things will drive new consumer and business behavior that will demand increasingly intelligent
industry solutions, which, in turn, will drive trillions of dollars in opportunity for IT industry and even more for
the companies that take advantage of the IoT.This Workshop helps to get you ready for the future.

\*
**Please bring your laptop for the workshop**

> "The Internet of Things isn't a concept. It's a network; true technology based Network of all networks"

> -Edewede Oriwoh`,
        'name': 'Internet of Things',
        'content': '',
        'benefits': `
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': `
* Raipur
* And more ..
`
      }
    ]
  ])
};
