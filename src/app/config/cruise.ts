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
        name: 'Internet Of Things',
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
      date: '2-3 September',
      eventcode: 'technocruise-dehradun-443331',
      pic: '',
      workshop:
        ['Ethical Hacking', 'Android App Development'],
      row: 1
    },
    {
      name: 'raipur',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 1
    },
    {
      name: 'hyderabad',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 1
    },
    {
      name: 'allahabad',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 1
    },
    {
      name: 'indore',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'jabalpur',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'chandigarh',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 2
    },
    {
      name: 'agra',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 3
    },
    {
      name: 'chennai',
      date: '',
      eventcode: 'technocruise-raipur-213040',
      pic: '',
      workshop: '',
      row: 3
    },
    {
      name: 'patna',
      date: '',
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
We will complete knowledge of basic security concepts, principles, and the key terms associated
with information security and cyber World.
Intend of this module is to clear misbelieves and myths of cyber world and also to study recent
trends as well as threats and modus operandi of cyber criminals and testers.`,
        'name': 'Ethical Hacking',
        'content': `
### Networking Fundamentals

Networks are defined as medium for communication between two or multiple systems, i.e. it con-
stitutes a mechanism of information that travels across multiple devices using various mediums,
concepts of Domain name system, Servers, Connection mechanism.
This module will cover in depth knowledge of OSI model and TCP/IP model and how data is
transmitted through network, along with various Protocols used at each layer with focus on Net-
working Layers, Network design and implementation and what devices are used for the data
transmission i.e. hardware associated with networking like switches, router, hub etc along with
types of network, internet protocol v4 & v6, ports & protocols, sub netting concepts, domain name
system and its working, Network architecture and standards.

### Open Source Intelligence

Open source intelligence (OSI) is focused on collecting as much information as possible about a
target which can be organization, a person, website or a specific system.
The module is designed to give insight of OSI methods and techniques i.e. various ways to collect
information from publicly available resources like e-Mail spoofing, Fake mail Tracing by using
various methods.
The module will provide elementary knowledge about advance search techniques in various
search engines used by security professionals, cyber criminals. Introduction to social engineering
technique like phishing for email id hacking, desktop phishing, remote phishing and how it is es-
sential in information gathering.

### Network Attacks

The module will begin with an introduction of loopholes in protected Wi-Fi networks and its test-
ing. Students will be able to learn, how to test security of a protected Wi-Fi network.
In the later phase module will include hands on demonstration of internal network attacks like
sniffing.
Module will cover scanning networks for live systems and their open ports further it will include
operating system finger printing and grabbing banners of running services on remote system.
It will also give insight on scanning of known vulnerabilities.

### Malware : Attacks & Detection

The course will cover basic terminologies and concept of Malware - definition, why and how it is
affecting the network and the system, key tools and techniques of malware attacks.
Students will be briefed about creating Malware and various types of malware (virus, worms, Tro-
jans, key loggers etc.)
Concepts of antivirus and their working along with it techniques to identify Malwares which are
not detected by AVs will be taught.

### Web Application Attacks

Introductory knowledge of database and working with database using SQL queries along with
installation and working for local servers. Basic working of HTTP with request and host exam-
ples. Basic html, JavaScript, php, sql are included in this module to make students better under-
stand the loopholes. By the end of this module, students will be able to test for different type of
loopholes in web application security.

### Cyber Crime

This session will include various cybercrime cases and criminal modus operands. Also will be
discussed various cybercrime cases handled by HICUBE along with investigation procedure.
Methods to handle cybercrime cases and Dos and Don’ts of handling cybercrime cases will be
discussed. Indian IT act with reference to case studies from HICUBE will be discussed.
`,
        'benefits': `
* A great headstart to pursue your interest in the field of cyber security.
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': `
* Dehradun
* And more ...
`
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
        'benefits': `
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': `
* Dehradun
* And more ...
`
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

> "The Internet of Things isn't a concept. It's a network; true technology based Network of all networks"

> -Edewede Oriwoh`,
        'name': 'Internet Of Things',
        'content': '',
        'benefits': `
* Certificate of Participation for each participant from Techkriti, IIT Kanpur.
`,
        'cities': ''
      }
    ]
  ])
};
