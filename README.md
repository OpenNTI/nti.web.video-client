# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Architect Setup

When deploying to AWS Lambda with Architect, you'll need:

- Architect (`arc`) CLI
- AWS SDK

Architect recommends installing these globally:

```sh
$ npm i -g @architect/architect aws-sdk
```

## Development

You will be running two processes during development when using Architect as your server.

- Your Architect server sandbox in one
- The Remix development server in another

```sh
# in one tab
$ arc sandbox

# in another
$ npm run dev
```

Open up [http://localhost:3333](http://localhost:3333) and you should be ready to go!

If you'd rather run everything in a single tab, you can look at [concurrently](https://npm.im/concurrently) or similar tools to run both processes in one tab.

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

# Teleprompter Script Generator
Steps for generating teleprompter scripts from a tracking doc.
1. Complete all steps for project setup, then run `npm start`
2. Navigate to `localhost:3333` and login with Google Account
3. You should be redirected to a page titled 'Video Tooling'. Click the button labeled: 'Teleprompter Script Generator.'
4. You are now at `localhost:3333/tsg`. The page contains four text fields:
	- **Spreadsheet URL** - the link to the tracking doc.
	- **Sheet Name (optional)** - the name of the Sheet/Page to collect data from. If a sheet name is not supplied, the value **"Master Review Tracker"** will be used.
	- **Starting Row (optional)** - allows you to start collecting links from a row other than the first. If a starting row is not provided, the script will start collecting data at row **5**.
	- **Data Column (optional)** - allows you to specify the column to collect information from. If a data column is not specified, the script will collect links from column **'I'**.
5. Once you have specified the parameters, click the 'Generate' button. This starts the data collection process, which might take several minutes.
6. Once the script has finished running, you are redirected to a new page containing the results. You can download a specific file by clicking on the file's name in the results page. By clicking the 'Download All' button, you can download a zipped folder containing all generated files, as well two additional files containing metadata for all of the generated scripts. 
