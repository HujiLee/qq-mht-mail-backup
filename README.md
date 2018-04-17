### install
```bash
npm i qq-mht-mail-backup -g
```

### how to use it

```bash
SMTP_SERVER="smtp.mail.ru" MAIL_USER="yourmail@yourdomain" MAIL_PASS="your-pass-word" MAIL_RECEIVERS="mailbox1@yourdomain,mailbox2@yourdomain" qq-mht-mail-backup path/to/mht/file
```

### optional ENV

* `MONGO_URI`
this tool require  mongodb for temporary data store

by default,this is set as `mongodb://localhost:27017/mht-foobar`

* `SMTP_PORT`

by default,this is set as `465`