import {
  // type AppleDeviceName,
  // combinePresetAndAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config';

// const devices: AppleDeviceName[] = [
//   'iPhone 14',
//   'iPhone 14 Plus',
//   'iPad Air 9.7"',
//   'iPad Pro 12.9"',
// ];

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: { ...minimal2023Preset },
  // preset: combinePresetAndAppleSplashScreens(
  //   minimal2023Preset,
  //   {
  //     // dark splash screens using black background (the default)
  //     darkResizeOptions: { background: 'black', fit: 'contain' },
  //   },
  //   devices,
  // ),
  images: ['public/logo.svg'],
});
