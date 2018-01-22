
export default class Page {
  open (path) {
    browser.url(path)
    console.log('opened');
  }
}
