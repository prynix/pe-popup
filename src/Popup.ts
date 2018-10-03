export default class Popup {

  private readonly template: HTMLElement;
  private readonly adsenseBlockContainer: HTMLDivElement;
  private popup: HTMLDivElement;


  public constructor(template: HTMLElement, adsenseBlockContainer: HTMLDivElement) {
    this.template = template;
    this.adsenseBlockContainer = adsenseBlockContainer;
  }


  public create(): Popup {
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
    setTimeout((): void => {
      const overlay = document.createElement('div');
      overlay.classList.add('pe__popup__overlay');
      document.body.appendChild(overlay);
      document.body.appendChild(this.popup);
    }, 1000 * Popup.getRandomInteger(10, 15));
  }


  private static getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}