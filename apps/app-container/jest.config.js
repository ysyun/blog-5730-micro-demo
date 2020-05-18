module.exports = {
  name: 'app-container',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-container',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
