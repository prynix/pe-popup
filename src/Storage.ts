export default class Storage {

  private static readonly KEY = '__SPECIAL_ONE_SESSION_COUNTER__';
  private counter: number;


  private getPersistedCounter(): number {
    return parseInt(window.localStorage.getItem(Storage.KEY));
  }

  private savePersistedCounter(): void {
    window.localStorage.setItem(
      Storage.KEY,
      this.counter.toString()
    );
  }


  public canShowPopup(): boolean {
    return this.counter >= Storage.deep(1, 2);
  }

  public incrementShowCounter(): void {
    const counter = this.getPersistedCounter();
    if (!isNaN(counter)) {
      this.counter = counter + 1;
    } else {
      this.counter = 1;
    }
    this.savePersistedCounter();
  }

  public clear(): void {
    window.localStorage.clear();
  }


  private static deep(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}