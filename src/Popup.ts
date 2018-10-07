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
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.popup);
    // window.onblur = this.hide;
  }


  private hide = (): void => {
    this.overlay.remove();
    this.popup.remove();
  }
}