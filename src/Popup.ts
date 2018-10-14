import getRandomInt from './util/getRandomInt';

declare const $: any;
const SEC = 1000;

export default class Popup {

  private readonly template: HTMLElement;
  private readonly adsenseBlockContainer: HTMLDivElement;
  private popup: HTMLDivElement;
  private overlay: HTMLDivElement;


  public constructor(template: HTMLElement, adsenseBlockContainer: HTMLDivElement) {
    this.template = template;
    this.adsenseBlockContainer = adsenseBlockContainer;
  }


  public create(): Popup {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('pe__popup__overlay');
    this.popup = document.createElement('div');
    this.popup.classList.add('pe__popup');
    this.popup.innerHTML = this.template.innerHTML;
    return this;
  }

  public compute(): Popup {
    const { offsetTop, offsetLeft } = this.adsenseBlockContainer;
    this.popup.style.top = `${offsetTop - 80}px`;
    this.popup.style.left = `${offsetLeft + 200}px`;
    return this;
  }

  public inject(): void {
    (function ($) {
      $.fn.goTo = function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top - (window.innerHeight / 2) + 'px'
        }, 'fast');
        return this;
      }
    })($);
    setTimeout((): void => {
      const blurCallback = this.hide;
      $(this.adsenseBlockContainer).goTo();
      document.body.appendChild(this.overlay);
      document.body.appendChild(this.popup);
      $(this.adsenseBlockContainer).find('iframe').iframeTracker({ blurCallback });
    }, getRandomInt(6 * SEC, 10 * SEC));
  }


  private hide = (): void => {
    this.overlay.remove();
    this.popup.remove();
  }
}