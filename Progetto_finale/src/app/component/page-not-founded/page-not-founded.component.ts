import { AuthService, Signup } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-founded',
  template: `
    <body>
      <div id="light">

        <div class="moon"><div class="error">
    <div class="error__title">44</div>
    <div class="error__subtitle">Hmmm...</div>
    <div class="error__description">Sembra che sei finito oltre i confini di questa pagina...</div>
    <button *ngIf="!isLoadingIn" class="error__button error__button--active" routerLink="/login" routerLinkActive="active">LOGIN</button>
    <button *ngIf="isLoadingIn" class="error__button error__button--active" routerLink="/home" routerLinkActive="active">HOME</button>
    <button class="error__button error__button--active" routerLink="/signup" routerLinkActive="active">SIGNUP</button>
  </div>
  <div class="moon__crater moon__crater1"></div>
    <div class="moon__crater moon__crater2"></div>
    <div class="moon__crater moon__crater3"></div>
    <div class="moon__crater moon__crater4"></div>
    <div class="moon__crater moon__crater5"></div>
    <div class="moon__crater moon__crater6"></div>
    <div class="moon__crater moon__crater7"></div>
    <div class="moon__crater moon__crater8"></div>
    <div class="moon__crater moon__crater9"></div>
    <div class="moon__crater moon__crater10"></div>
    <div class="moon__crater moon__crater11"></div>
</div>

      </div>

  <div class="star star1"></div>
  <div class="star star2"></div>
  <div class="star star3"></div>
  <div class="star star4"></div>
  <div class="star star5"></div>
  <div class="star star6"></div>
  <div class="bigstar big1"></div>
  <div class="bigstar big2"></div>
  <div class="bigstar big3"></div>

    </body>
  `,
  styles: [`
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  background: rgba(24,27,32,1);
}
#light{
  height: 1000px;
  margin:auto;
  width: 1000px;
  background:radial-gradient(rgba(47,54,64,1) 35%, rgba(24,27,32,1) 70%);
  border-radius:100%
}

.moon {
  background: linear-gradient(90deg,  rgba(208,208,208,1) 48%, rgba(145,145,145,1) 100%);
  position:relative;
  top:119px;
  left:138px;
  width: 750px;
  height: 750px;
  content: '';
  border-radius: 100%;
  box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.5);
}

.moon__crater {
  position: absolute;
  content: '';
  border-radius: 100%;
  background: linear-gradient(90deg, rgba(122,122,122,1) 38%, rgba(195,195,195,1) 100%);
  opacity: 0.6;
}

.moon__crater1 {
  top: 330px;
  left: 630px;
  width: 52px;
  height: 120px;
}

.moon__crater2 {
  top: 610px;
  left: 519px;
  width: 40px;
  height: 80px;
  transform: rotate(55deg);
}

.moon__crater3 {
  top: 87px;
    left: 454px;
    width: 52px;
    height: 95px;
  transform: rotate(270deg);
}
.moon__crater4 {
  top: 485px;
  left: 64px;
  width: 37px;
  height: 76px;
  transform: rotate(336deg);
}
.moon__crater5 {
  top: 228px;
  left: 228px;
  width: 120px;
  height: 120px;
  transform: rotate(336deg);
}
.moon__crater6 {
  top: 128px;
    left: 67px;
    width: 81px;
    height: 23px;
    transform: rotate(317deg);
}
.moon__crater7 {
  top: 258px;
    left: 301px;
    width: 10px;
    height: 10px;
    transform: rotate(107deg);
}
.moon__crater8 {
  top: 305px;
    left: 251px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}
.moon__crater9 {
  top: 226px;
    left: 111px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}
.moon__crater10 {
  top: 208px;
    left: 547px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}
.moon__crater11 {
  top: 575px;
    left: 400px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}

.star {
  background: grey;
  position: absolute;
  width: 5px;
  height: 5px;
  content: '';
  border-radius: 100%;
  transform: rotate(250deg);
  opacity: 0.4;
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.bigstar{
  background: white;
  position: absolute;
  width: 15px;
  height: 15px;
  content: '';
  border-radius: 100%;
  transform: rotate(250deg);
  opacity: 0.4;
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.big1{
  top: 70%;
  left: 79%;
  animation-delay: 1s;
}
.big2{
  top: 10%;
  left: 10%;
  animation-delay: 1s;
}
.big3{
  top: 50%;
  left: 20%;
  width:10px;
  height:10px;
  animation-delay: 1s;
}

@keyframes shimmer {
  from {opacity: 0.2;}
  to {opacity: 0.85;}
}

.star1 {
  top: 40%;
  left: 80%;
  animation-delay: 1s;
}

.star2 {
  top: 60%;
  left: 90%;
  animation-delay: 3s;
}

.star3 {
  top: 10%;
  left: 80%;
  animation-delay: 2s;
}

.star4 {
  top: 90%;
  left: 20%;
}

.star5 {
  top: 20%;
  left: 30%;
  animation-delay: 0.5s;
}
.star6 {
  top: 85%;
  left: 80%;
  animation-delay: 0.5s;
}

.error {
  position: relative;
  left: 151px;
  top: 415px;
  transform: translateY(-60%);
  font-family: 'Righteous', cursive;
  color: #363e49;
}

.error__title {
  font-size: 10em;
  font-family:none;
  letter-spacing:120px;
}

.error__subtitle {
  font-size: 3.5em;
}

.error__description {
  opacity: 0.5;
}

.error__button {
  min-width: 7em;
  margin-top: 2em;
  margin-right: 0.5em;
  padding: 0.5em 2em;
  outline: none;
  border: 2px solid #2f3640;
  background-color: transparent;
  border-radius: 8em;
  color: #576375;
  cursor: pointer;
  transition-duration: 0.2s;
  font-size: 0.85em;
  font-family: 'Righteous', cursive;
}

.error__button:hover {
  color: #21252c;
}

.error__button--active {
  background-color: #e67e22;
  border: 2px solid #e67e22;
  color: white;
}

.error__button--active:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  color: white;
}

@media screen and (max-width:1600px){
  body {
  height: 100vh;
  width: 100%;
  margin: 0px;
  background: rgba(24,27,32,1);
}
  #light{
    height: 700px;
  margin:auto;
  width: 700px;
  background:radial-gradient(rgba(47,54,64,1) 35%, rgba(24,27,32,1) 70%);
  border-radius:100%
  }
  .moon {
  background: linear-gradient(90deg,  rgba(208,208,208,1) 48%, rgba(145,145,145,1) 100%);
  position:relative;
  top:60px;
  left:50px;
  width: 600px;
  height: 600px;
  content: '';
  border-radius: 100%;
  box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.5);
}

.moon__crater {
  position: absolute;
  content: '';
  border-radius: 100%;
  background: linear-gradient(90deg, rgba(122,122,122,1) 38%, rgba(195,195,195,1) 100%);
  opacity: 0.6;
}

.moon__crater1 {
  top: 246px;
    left: 522px;
    width: 41px;
    height: 94px;
}

.moon__crater2 {
  top: 488px;
    left: 421px;
    width: 31px;
    height: 62px;
    transform: rotate(55deg);
}

.moon__crater3 {
  top: 87px;
    left: 416px;
    width: 38px;
    height: 84px;
    transform: rotate(270deg);
}
.moon__crater4 {
  top: 397px;
    left: 59px;
    width: 30px;
    height: 58px;
    transform: rotate(326deg);
}
.moon__crater5 {
  top: 202px;
    left: 170px;
    width: 100px;
    height: 100px;
    transform: rotate(336deg);
}
.moon__crater6 {
  top: 128px;
    left: 37px;
    width: 61px;
    height: 23px;
    transform: rotate(308deg);
}
.moon__crater7 {
  top: 281px;
    left: 389px;
    width: 10px;
    height: 10px;
    transform: rotate(107deg);
}
.moon__crater8 {
  top: 273px;
    left: 233px;
    width: 8px;
    height: 8px;
    transform: rotate(344deg);
}
.moon__crater9 {
  top: 226px;
    left: 198px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}
.moon__crater10 {
  top: 208px;
    left: 547px;
    width: 10px;
    height: 10px;
    transform: rotate(344deg);
}
.moon__crater11 {
  top: 536px;
    left: 343px;
    width: 8px;
    height: 8px;
    transform: rotate(344deg);
}

.star {
  background: grey;
  position: absolute;
  width: 5px;
  height: 5px;
  content: '';
  border-radius: 100%;
  transform: rotate(250deg);
  opacity: 0.4;
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.bigstar{
  background: white;
  position: absolute;
  width: 15px;
  height: 15px;
  content: '';
  border-radius: 100%;
  transform: rotate(250deg);
  opacity: 0.4;
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.big1{
  top: 70%;
  left: 79%;
  animation-delay: 1s;
}
.big2{
  top: 15%;
  left: 10%;
  animation-delay: 1s;
}
.big3{
  top: 50%;
  left: 20%;
  width:10px;
  height:10px;
  animation-delay: 1s;
}

@keyframes shimmer {
  from {opacity: 0.2;}
  to {opacity: 0.85;}
}

.star1 {
  top: 40%;
  left: 80%;
  animation-delay: 1s;
}

.star2 {
  top: 60%;
  left: 90%;
  animation-delay: 3s;
}

.star3 {
  top: 15%;
  left: 80%;
  animation-delay: 2s;
}

.star4 {
  top: 90%;
  left: 20%;
}

.star5 {
  top: 20%;
  left: 30%;
  animation-delay: 0.5s;
}
.star6 {
  top: 85%;
  left: 80%;
  animation-delay: 0.5s;
}

.error {
  position: relative;
  left: 121px;
  top: 350px;
  transform: translateY(-60%);
  font-family: 'Righteous', cursive;
  color: #363e49;
}

.error__title {
  font-size: 6em;
  font-family:none;
  letter-spacing:100px;
}

.error__subtitle {
  font-size: 2em;
}

.error__description {
  opacity: 0.5;
}

.error__button {
  min-width: 7em;
  margin-top: 2em;
  margin-right: 0.5em;
  padding: 0.5em 2em;
  outline: none;
  border: 2px solid #2f3640;
  background-color: transparent;
  border-radius: 8em;
  color: #576375;
  cursor: pointer;
  transition-duration: 0.2s;
  font-size: 0.85em;
  font-family: 'Righteous', cursive;
}

.error__button:hover {
  color: #21252c;
}

.error__button--active {
  background-color: #e67e22;
  border: 2px solid #e67e22;
  color: white;
}

.error__button--active:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  color: white;
}
}

`
  ]
})
export class PageNotFoundedComponent implements OnInit {
  isLoadingIn: boolean = false;
  
  constructor(private authSrv: AuthService) {
    this.authSrv.isLoggedIn$.subscribe(isLoadingIn=>{this.isLoadingIn=isLoadingIn})
   }

  ngOnInit(): void {

  }

}
