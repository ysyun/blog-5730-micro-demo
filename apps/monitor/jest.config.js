module.exports = {
  name: 'monitor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/monitor',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
