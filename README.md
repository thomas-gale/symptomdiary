# symptomdiary
A smarter symptom and medication diary

## Dev notes
Based on https://create.t3.gg/

### Create .env.local
```
# Public environment variables for firebase config/options.
NEXT_PUBLIC_FIREBASE_API_KEY=***************************************
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=******************************
NEXT_PUBLIC_FIREBASE_PROJECT_ID=**************
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=**************.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID=************
NEXT_PUBLIC_FIREBASE_APP_ID=1:************:***:**********************
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-**********

# Next auth (local)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=********************************************

# Secrets for google auth
GOOGLE_CLIENT_ID=************************************************************************
GOOGLE_CLIENT_SECRET=***********************************

# Prisma (local)
DATABASE_URL="mysql://root:localpassword@localhost:3306/symptomdiary"

# Prisma (prod proxy) run `pscale connect symptomdiary --port 3309` after auth in separate terminal
# DATABASE_URL = 'mysql://root@127.0.0.1:3309/symptomdiary'
```

### Local Mysql (in separate terminal)
- `docker-compose -f db.docker-compose.yml up`

### Planetscale (migrations)
- [Download](https://planetscale.com/features/cli)
- `pscale auth login`
- `pscale branch create symptomdiary new-feature-migration`
- `pscale connect symptomdiary new-feature-migration --port 3309`
- Enable the DATABASE_URL .env for `prod proxy`
- Run migration
- Test
- Merge `pscale` branch into prod (main) once reviewed
