module.exports = {
    name: 'lazyview',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/lazyview',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
