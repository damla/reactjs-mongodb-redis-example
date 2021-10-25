# Hepsiburada React Challenge

## Proje Amacı

- Hepsiburada için arama sayfası yapmak amacıyla geliştirilimiştir.
- Tasarım olarak bu [proje](https://www.figma.com/file/Wr7Usgaisuz4BPiWM8kuIy/Hepsiburada-Storefront-React-Challange?node-id=1%3A267) ele alınmıştır.

## Kullanılan Teknolojiler

### Front-End

- [ReactJS](https://reactjs.org) - Front-end kütüphanesi olarak kullanılmıştır.
- [SASS](https://sass-lang.com) - CSS extension dili olarak kullanılmıştır.
- [Classnames](https://www.npmjs.com/package/classnames) - Stil sınıflarını koşullara göre eklemek/ çıkarmak için kullanılmıştır.
- [Context API](https://reactjs.org/docs/context.html) - Zaman kısıtlamasından ve built-in olmasından dolayı state yönetimi için Context API tercih edilmiştir.

### Back-End

- [Redis](https://redis.io) - Verileri In-Memory tutmak için kullanılmıştır.
- [ExpressJS](http://expressjs.com) - Server için NodeJS kütüphanesi olarak kullanılmıştır.

## Test

- Unit test için [Mocha](https://mochajs.org) ve [Chai](https://www.chaijs.com) kütüphaneleri kullanılmıştır.

## Uygulamanın Local'de Çalıştırılması

- Server' ın ayağa kaldırılması için aşağıdaki komutlar girilmelidir.

```bash
cd server
yarn start
```

- Client' ın ayağa kaldırılması için aşağıdaki komutlar girilmelidir.

```bash
cd client
yarn start
```
