# position: absolute Android bug repro

To reproduce the issue:

1. Install the packages with `yarn` or `npm`
2. Open Android emulator
3. Run `yarn android` / `npm run android`
4. Make sure the app is visible
5. Press on the dropdown to open it

Then:

1. Install [maestro](https://docs.maestro.dev/) locally
2. Run `maestro -p android test maestro.yml` and see the test fail
3. Run `maestro hierarchy` and see that the dropdown items are not visible in the output

[See details](https://github.com/mobile-dev-inc/Maestro/issues/1609#issuecomment-2871051827)
