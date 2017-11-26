import { browser, by, element } from 'protractor';
import { MyPlaylist } from './playlist.po';

describe('Elements on the Playlist page', function() {
  let page: MyPlaylist;

  beforeEach(() => {
    page = new MyPlaylist();
  });

  it('should display heading saying My YouTube playlist', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('My YouTube playlist');
  });

  it('should display container for item', () => {
    page.navigateTo('/');
    expect(page.getElement('app-root .item-container').isDisplayed()).toBeTruthy();
  });

  it('should display container for item media', () => {
    page.navigateTo('/');
    expect(page.getElement('app-root .item-media').isDisplayed()).toBeTruthy();
  });

  it('should display container for item description', () => {
    page.navigateTo('/');
    expect(page.getElement('app-root .item-description').isDisplayed()).toBeTruthy();
  });

  it('should change url for video details page', () => {
    page.goToVideoDetailsPage();
    browser.ExpectedConditions.urlContains('/#/video-details?itemId=UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD');
  });

describe('Playlist Content Page', function() {

  it('should display playlist item 1 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_0 a')).toBe('Lamb Angelica');
    expect(page.getParagraphText('#item_0 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_0 .description')).toContain('From Lamb\'s 2003 album Between Darkness and Wonder');
    expect(page.getVideoImage('#item_0 img')).toEqual('https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg');
  });

  it('should display playlist item 2 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_1 a')).toBe('Massive Attack - Teardrop');
    expect(page.getParagraphText('#item_1 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_1 .description')).toContain('Discover more about this classic song and the Mezzanine album here: ');
    expect(page.getVideoImage('#item_1 img')).toEqual('https://i.ytimg.com/vi/u7K72X4eo_s/hqdefault.jpg');
  });

  it('should display playlist item 3 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_2 a')).toBe('Blue Foundation - Eyes On Fire');
    expect(page.getParagraphText('#item_2 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_2 .description')).toContain('Lyrics to "Eyes On Fire" song by Blue Foundation. Buy Blue Foundation "In My Mind I Am Free" ');
    expect(page.getVideoImage('#item_2 img')).toEqual('https://i.ytimg.com/vi/8IHFVn0sv14/hqdefault.jpg');
  });

  it('should display playlist item 4 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_3 a')).toBe('The xx - Islands (lyrics)');
    expect(page.getParagraphText('#item_3 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_3 .description')).toContain('These are the lyrics for the song "Islands" by the awesome band, ');
    expect(page.getVideoImage('#item_3 img')).toEqual('https://i.ytimg.com/vi/BJzvBGXmmy0/hqdefault.jpg');
  });

  it('should display playlist item 5 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_5 a')).toBe('Donnie Darko Middlesex Times');
    expect(page.getParagraphText('#item_5 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getVideoImage('#item_5 img')).toEqual('https://i.ytimg.com/vi/Y69gu2xv25s/hqdefault.jpg');
  });

  it('should display playlist item 6 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_6 a')).toBe('Massive Attack - Black Milk');
    expect(page.getParagraphText('#item_6 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_6 .description')).toContain('Shotty\'s Classic Series #17: Massive Attack\'s debut Blue');
    expect(page.getVideoImage('#item_6 img')).toEqual('https://i.ytimg.com/vi/li-adM-qOwI/hqdefault.jpg');
  });

  it('should display playlist item 7 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_7 a')).toBe('Lamb - Gold (with lyrics)');
    expect(page.getParagraphText('#item_7 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_7 .description')).toContain('Lyrics: http://easylyrics.org/?artist=Lamb&title=Gold');
    expect(page.getVideoImage('#item_7 img')).toEqual('https://i.ytimg.com/vi/l7XSehSg-cQ/hqdefault.jpg');
  });

  it('should display playlist item 8 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_8 a')).toBe('Portishead - Sour Times');
    expect(page.getParagraphText('#item_8 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_8 .description')).toContain('Brilliant track from thealbum \'Glory Box\'..."Sour Times"');
    expect(page.getVideoImage('#item_8 img')).toEqual('https://i.ytimg.com/vi/g7gutsi1uT4/hqdefault.jpg');
  });

  it('should display playlist item 9 content when application first load', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('#item_9 a')).toBe('Massive Attack - Paradise Circus');
    expect(page.getParagraphText('#item_9 .published')).toBe('Published on Sep 4, 2014');
    expect(page.getParagraphText('#item_9 .description')).toContain('The new single from Massive Attack. From their latest album Heligoland');
    expect(page.getVideoImage('#item_9 img')).toEqual('https://i.ytimg.com/vi/jEgX64n3T7g/hqdefault.jpg');
  });

});


  describe('Video Page Content Details', function() {
    it('should display h2 header saying Lamb Angelica', () => {
      page.navigateTo('/video-details?itemId=UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD');
      expect(page.getParagraphText('app-root h2')).toEqual('Lamb Angelica');
    });

    it('should navigate to video details page by clicking on the title link', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(0);
      navLink.click();
      expect(page.getElement('app-root .item-container').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .video-details').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root h2').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .published').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .item-media').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .video-responsive').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .item-description').isDisplayed()).toBeTruthy();
      expect(page.getElement('app-root .description').isDisplayed()).toBeTruthy();
    });

    it('should display content for video 1 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(0);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Lamb Angelica');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toBe('From Lamb\'s 2003 album Between Darkness and Wonder');
    });

    it('should display content for video 2 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(1);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Massive Attack - Teardrop');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('Discover more about this classic song and the Mezzanine album here: ');
    });

    it('should display content for video 3 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(2);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Blue Foundation - Eyes On Fire');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('Lyrics to "Eyes On Fire" song by Blue Foundation. Buy Blue Foundation');
    });

    it('should display content for video 4 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(3);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('The xx - Islands (lyrics)');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('These are the lyrics for the song "Islands" by the awesome band');
    });

    it('should display content for video 5 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(4);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Donnie Darko Middlesex Times');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
    });

    it('should display content for video 6 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(5);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Massive Attack - Black Milk');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('Shotty\'s Classic Series #17: Massive Attack\'s debut Blue Lines');
    });

    it('should display content for video 7 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(6);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Lamb - Gold (with lyrics)');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('Lyrics: http://easylyrics.org/?artist=Lamb&title=Gold');
    });

    it('should display content for video 8 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(7);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Portishead - Sour Times');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('Brilliant track from thealbum \'Glory Box\'..."Sour Times" ');
    });

    it('should display content for video 9 details page', () => {
      page.navigateTo('/');
      let navLink = page.getAllElements('a').get(8);
      navLink.click();

      expect(page.getParagraphText('app-root a')).toBe('< Back to list of videos');
      expect(page.getParagraphText('app-root h2')).toBe('Massive Attack - Paradise Circus');
      expect(page.getParagraphText('app-root .published')).toBe('Published on Sep 4, 2014');
      expect(page.getParagraphText('app-root .description')).toContain('The new single from Massive Attack. From their latest album');
    });
  });

});
