import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { FbLoginService } from '../../services/auth/fb-login.service';
import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { ToscService } from '../../services/tosc.service';

import { ToscLoginComponent } from './tosc-login/tosc-login.component';


@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css'],
})

export class ToscComponent implements OnInit {

  private user: any;
  private currentUser: any;
  scroll: boolean = false;
  tabStrings: string[] = ['ABOUT',
                          'DETAILS',
                          'CONDUCTION',
                          'CITIES',
                          'PRIZES',
                          'TESTIMONIALS',
                          'FAQ',
                          'GALLERY',
                          'SPONSORS',
                          'CONTACTS'];
  imagesStrings: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.png', '5.jpg'];

  hamOpen: boolean = false;
  tosc = {
    about: ['Techkriti is the Asia’s largest annual international technical & entrepreneurship festival of IIT Kanpur and definitely the greatest exponent of exuberance and creativity of its students. Witnessing nearly 40,000 footfalls with over 1000 participants from all over the nation, the festival is a much-awaited event in the technical and business calendar of the student community.',
            'Techkriti Open School Championship(TOSC) is an annual school aptitude examination for classes 9th to 12th, conducted and organized by Techkriti. It consists of 3 Rounds. Phase 1 is a written exam, based on which 1000 students will be selected and asked to submit (online) the abstract of the project in Phase 2 and for the final phase, 100 selected students will be invited at IIT Kanpur to give a presentation about their abstract and get a chance to win a variety of prizes and goodies.',
            'The mission of TOSC is to strengthen and cultivate the talent of our nation at the grassroots level, i.e., the high-school students. TOSC aims at strengthening mental aptitude, logic and scrutiny and providing a platform to build fundamental experience and knowledge. It also encourages students to exercise coordination skills and to think out of the box while providing solutions to practical problems. Unlike other competitive examinations, TOSC focuses on innovation and pragmatism while dealing with real life problems instead of just academic aptitude.'],
    details: [
      ['PHASE 1', 'Written exam of 90 minutes duration, consisting of 60 questions broadly divided into 2 sections (Aptitude and General Awareness) to be held in various cities.'],
      ['PHASE 2', 'Online abstract submission – an abstract of your idea has to be submitted online in prescribed format for judging. Few ideas will be provided by us but student are free to choose one of their own. Telephonic interview will be held, in which participants will be asked questions on their abstract.'],
      ['PHASE 3', 'Participants, on the basis of their abstract will be selected for presenting their ideas in the final round to be held at IIT Kanpur. In this round, students will present their abstracts in front of the panel of judges.']
    ],
    conduction: [
      '500 students from each pool will be selected for Phase 2 on the basis of their score in Phase 1.',
      'Participants who have qualified Phase 1 will be asked to submit an abstract of their solution of any problem pertaining to the physical and social environment of the neighbourhood.',
      'Few example problems will be provided by us on the TOSC website, but students are encouraged to come up with their own problem statement and its solution.',
      'On the basis of abstract, 50 students from each pool will qualify for the final Phase to be held at IIT Kanpur.',
      'Students will have to prepare a presentation based on the abstract submitted in Phase 2.',
      'Presentations would be judged by a panel consisting of Professors.',
      'Questions in the Aptitude section are of different Weightage according to their level of difficulty, to avoid rank clashes.',
      'All Questions are multiple choice types with negative marks for wrong answers as specified in question paper.',
      'Phase 1 paper will be bilingual, i.e. English and Hindi.',
      'Students must carry their institute ID card or any other Identification proof and print out of TOSC ID card on the day of all the exams.',
      'There will be a telephonic interview of the top 200 students of Phase 2 which will be notified to the students beforehand. The participants will be asked questions related to their abstract.',
      'Plagiarism will not be entertained and will result in deregistration of student from TOSC.'
    ]
  };
  contacts = [
    {
      name: "Keshav Verma",
      contact: "+91-9453994643",
      email: "keshav@techkriti.org",
      src: '/assets/keshav.jpg',
      href:"https://www.facebook.com/keshav.verma.900?fref=grp_mmbr_list"
    },
    {
      name: "Pradeep Kumar Dhinwal",
      contact: "+91-7755057748",
      email: "pradeep@techkriti.org",
      src: '/assets/pradeep.jpg',
      href:"https://www.facebook.com/pchoudharykd?fref=grp_mmbr_list"
    },
    {
      name: "Yazur Gupta",
      contact: "+91-9532657683",
      email: "yazur@techkriti.org",
      src: '/assets/yazur.jpg',
      href:"https://www.facebook.com/yazurgupta?fref=grp_mmbr_list"
    }
  ]
  constructor(private authService: ToscAuthService,
              private toscService: ToscService,
              private fbService: FbLoginService,
              private router: Router,
              private dialog: MdDialog) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 30) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  ngOnInit() {
  }
  
  fbLogin() {
    this.fbService.login()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  openSignIn() {
    let height = '40vmin';
    let width = '40vmin';
    if (window.innerWidth <= 412 ) {
      width = '60vw';
      height = '300px';
    }
    const dialogRef = this.dialog.open(ToscLoginComponent, {
      hasBackdrop: true,
      width: width,
      height: height
    });
  }

  logOut() {
    this.authService.signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  isLoggedIn() {
     this.authService.getUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

    userQuiz() {
      this.toscService.getQuiz()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }

  gotoToscForgot() {
    this.router.navigate(['tosc-forgot']);
  }

  gotoRegister() {
    this.router.navigate(['tosc-register']);
  }

  gotoBackend() {
    this.router.navigate(['backend']);
  }

  goto(section: string) {
    console.log(section);
    this.router.navigate(['tosc'], { fragment: section});
  }

  toggle() {
    this.hamOpen = !this.hamOpen;
  }


}
