# Demo Linkleri

- [🔗 Client](https://hb-react-challenge-frontend.netlify.app)
- [🔗 Server](https://hb-react-challenge-backend.herokuapp.com)

## Kullanılan Teknolojiler

### Front-End

- [ReactJS](https://reactjs.org) - Front-end kütüphanesi olarak kullanılmıştır.
- [SASS](https://sass-lang.com) - CSS extension dili olarak kullanılmıştır.
- [Classnames](https://www.npmjs.com/package/classnames) - Stil sınıflarını koşullara göre eklemek/ çıkarmak için kullanılmıştır.
- [Context API](https://reactjs.org/docs/context.html) - Zaman kısıtlamasından ve built-in olmasından dolayı state yönetimi için Context API tercih edilmiştir.
- [React Router](https://reactrouter.com/) - Routing kütüphanesi olarak tercih edilmiştir.

### Back-End

- [MongoDB](https://www.mongodb.com) - İlk verilerin yüklenebilmesi için database üzerinden çekilecek. Sonrasında in-memory caching yapılacak.
- [Redis](https://redis.io) - Verileri In-Memory tutmak için kullanılmıştır.
- [ExpressJS](http://expressjs.com) - Server için NodeJS kütüphanesi olarak kullanılmıştır.

## Test

- Unit test için [Mocha](https://mochajs.org) ve [Chai](https://www.chaijs.com) kütüphaneleri kullanılmıştır.

## Info

⚠️ Projenin filtreleme ve test kısımları tamamlanmadı! ⚠️


## Uygulamanın Local'de Çalıştırılması

- Server' ın ayağa kaldırılması için aşağıdaki komutlar girilmelidir.

```bash
cd server
yarn
yarn start
```

- Client' ın ayağa kaldırılması için aşağıdaki komutlar girilmelidir.

```bash
cd client
yarn
yarn start
```
