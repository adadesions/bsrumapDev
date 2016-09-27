App.info({
  id: 'com.example.ken.bsrumap',
  name: 'BsruMap',
  description: 'Map for BSRU',
  author: 'Astru Sirisaengrungreuang',
  email: 'sg86.ss@gmail.com',
  website: 'http://188.166.191.84:3000/'
});

App.icons({
  'android_mdpi' : 'public/appIcon/mipmap-mdpi/ic_launcher.png',
  'android_hdpi' : 'public/appIcon/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi' : 'public/appIcon/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi' : 'public/appIcon/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi' : 'public/appIcon/mipmap-xxxhdpi/ic_launcher.png'
});

App.launchScreens({
  // mdpi
  'android_mdpi_portrait': 'public/splash/drawable-mdpi/background.9.png',
  'android_mdpi_landscape': 'public/splash/drawable-mdpi/background.9.png',
  // hdpi
  'android_hdpi_landscape': 'public/splash/drawable-hdpi/background.9.png',
  'android_hdpi_portrait': 'public/splash/drawable-hdpi/background.9.png',
  // xhdpi
  'android_xhdpi_landscape': 'public/splash/drawable-xhdpi/background.9.png',
  'android_xhdpi_portrait': 'public/splash/drawable-xhdpi/background.9.png',
  // xxhdpi
  'android_xxhdpi_landscape': 'public/splash/drawable-xxhdpi/background.9.png',
  'android_xxhdpi_portrait': 'public/splash/drawable-xxhdpi/background.9.png'
});

App.setPreference('Orientation', 'landscape');
App.setPreference('Orientation', 'landscape', 'android');
