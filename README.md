# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
## Local Setup

Node: 16


## Environment Variables

You can create a `.env` file as a sibling to this readme.

WRIKE_CLIENT_ID
: The ID of the wrike app.

WRIKE_CLIENT_SECRET
: The secret key of the wrike app.

GOOGLE_CLIENT_ID
: The ID of the google app needs `./auth/spreadsheets.readonly` and `./auth/documents.readonly` scopes

GOOGLE_CLIENT_SECRET
: The secret key of the google app
## Development

All of the necessary process for local development will be started by the start script.

```sh
$npm run start
```

Open up [http://localhost:3333](http://localhost:3333) and you should be ready to go!
## Deploying

Before you can deploy, you'll need to do some setup with AWS:

- First [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- Then [follow the Architect setup instructions](https://arc.codes/docs/en/guides/get-started/detailed-aws-setup).

If you make it through all of that, you're ready to deploy!

1. build the app for production:

   ```sh
   $ npm run build
   ```

2. Deploy with `arc`

   ```sh
   $ arc deploy production
   ```

You're in business!
