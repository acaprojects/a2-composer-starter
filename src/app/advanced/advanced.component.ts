import { Component } from '@angular/core';
import { trigger, transition, animate, style, state, keyframes } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'advanced',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './advanced.styles.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './advanced.template.html',
  animations: [
      trigger('menushow', [
          state('up',   style({ 'top': '-100%' })),
          state('down', style({ 'top':   '4.0em' })),
          transition('down <=> up', animate('0.7s ease-in-out')),
      ])
  ]
})
export class AdvancedAppComponent {
    image: string = 'http://static1.squarespace.com/static/52142586e4b0c09536a144ad/t/561327b2e4b06f521722e448/1469084115046/?format=1500w';
    title: string = 'Composer Starter Kit';
    menu_open: boolean = false;
    phone_num: string = '';
    started: boolean = false;
    volume: number = 100;
    mute: boolean = false;
    in_call: boolean = false;
    extension: string = '';
    allow_phone: boolean = false;
    mic_on: boolean = false;
    displays: any[] = [
        { name: 'Left', model: 'SAMSUNG', connected: false },
        { name: 'Right', model: 'SAMSUNG', connected: false }
    ];

    constructor(private router: Router) {

    }

    navigate(route: string) {
        this.router.navigate([route]);
    }

    addNumber(s: string) {
        this.phone_num += s;
    }

    start() {
        this.started = true;
    }
}