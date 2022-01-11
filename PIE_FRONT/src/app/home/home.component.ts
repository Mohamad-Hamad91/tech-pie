import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Container } from 'tsparticles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  particlesId = "tsparticles";
  particlesOptions: any;
  @ViewChild('emp') emp: ElementRef;
  @ViewChild('comp') comp: ElementRef;

  constructor() { }

  ngOnInit(): void {

    this.particlesOptions = {
      background: {
        color: {
          value: "transperant"
        }
      },
      fpsLimit: 20,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push"
          },
          onHover: {
            enable: false,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 5,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 2
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#99ffee"
        },
        links: {
          color: "#99ff99",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "bounce",
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 1200
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    };

  }


  particlesLoaded(container: Container): void {
    // console.log(container);
    // const canvs = document.getElementsByTagName('canvas');
    // canvs.item(0).style.zIndex = '-100';
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(e: Event) {
    const windowPos = window.scrollY;
    const empPos = this.emp.nativeElement.scrollHeight;
    const compPos = this.comp.nativeElement.scrollHeight;
    if (windowPos >= empPos) {
      debugger;
      this.emp.nativeElement.classList.add('choose-user-content-img-anim');
    }
    if (windowPos >= compPos) {
      debugger;
      this.comp.nativeElement.classList.add('choose-user-content-img-anim');
    }
    // this[name].nativeElement.classList.add('choose-user-content-img-anim');
  }

  // @HostListener('window:scroll') 
  // myOnScrollComp(e: Event) {
  //   this.comp.nativeElement.classList.add('choose-user-content-img-anim');
  // }

}
