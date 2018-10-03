export default class Storage {

  private static readonly KEY = '__SPECIAL_ONE_SESSION_COUNTER__';
  private static readonly DEEP = 2;
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
    return this.counter >= Storage.DEEP;
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
}